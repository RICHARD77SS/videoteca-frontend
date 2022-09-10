import React, { createContext, useState } from 'react';
import FormModal from '../Components/FormModal';
import api from './../services/api';



export const VideoContext = createContext();

export function VideoContextProvider({ children }) {

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
    api.patch(`videos/${id}`)
  }
//deleta o video
  function handleDelete(id) {
    api.delete(`videos/${id}`)
  }
//envia o video ou edita, caso venha o id na função
  function handleSubmit(event) {
    event.preventDefault()
    const video = {
      title, link
    }
    if (id) {
      api.put(`videos/${id}`, video)
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