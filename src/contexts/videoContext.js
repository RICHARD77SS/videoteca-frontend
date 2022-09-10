import React, { createContext, useState } from 'react';
import FormModal from '../Components/FormModal';
import api from './../services/api';
import { useAxios } from './../hooks/useAxios';



export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const { data, mutate } = useAxios('videos')

  const [openFormModal, setOpenFormModal] = useState();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [id, setId] = useState('');
  //Adicionar video
  function handleAdd() {
    setOpenFormModal(true);
  }
  //remove titule o link ao fechar
  function handleClose() {
    setOpenFormModal(false);
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
  }
  //adiciona title ao detectar evento de digitação
  function titleHandler(event) {
    setTitle(event.target.value);
  }
  //adiciona link ao detectar evento de digitação
  function linkHandler(event) {
    setLink(event.target.value);
  }
  //adiciona ou tira o like 
  function handleLike(id) {
    api.patch(`videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
          return {
            ...video,
            title: video.title,
            link: video.link,
            liked: !video.liked
          }
        }
        return video;
      }),
    };
    mutate(updatedVideos, false)
  }
  //deleta o video
  function handleDelete(id) {
    api.delete(`videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.filter((video) => video._id !== id)
    };

    mutate(updatedVideos, false);
  }
  //envia o video ou edita, caso venha o id na função
  function handleSubmit(event) {
    event.preventDefault()
    const video = {
      title, link
    }
    if (id) {
      api.put(`videos/${id}`, video)

      const updatedVideos = {
        videos: data.videos?.map((video) => {
          if (video._id === id) {
            return { ...video, title, link };
          }
          return video;
        }),
      };
      mutate(updatedVideos, false);
    } else {
      api.post('videos', video);
    }
    setOpenFormModal(false);
  }
  //abre o modal com infos do video clicado
  function handleEdit(videoId, videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    setId(videoId);
    setOpenFormModal(true);
  }

  return <VideoContext.Provider
    value={{
      handleAdd,
      handleClose,
      titleHandler,
      linkHandler,
      title,
      setTitle,
      link,
      setLink,
      handleSubmit,
      handleEdit,
      id,
      setId,
      handleLike,
      handleDelete
    }}>
    {children}
    {openFormModal && <FormModal />}
  </VideoContext.Provider>
}