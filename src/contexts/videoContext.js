import React, { createContext, useState } from 'react';
import FormModal from '../Components/FormModal';
import api from './../services/api';



export const VideoContext = createContext();

export function VideoContextProvider({ children }) {

  const [openFormModal, setOpenFormModal] = useState();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [id, setId] = useState('');

  function handleAdd() {
    setOpenFormModal(true);
  }
  function handleClose() {
    setOpenFormModal(false);
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
  }
  function titleHandler(event) {
    setTitle(event.target.value);
  }
  function linkHandler(event) {
    setLink(event.target.value);
  }

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
      setId
    }}>
    {children}
    {openFormModal && <FormModal />}
  </VideoContext.Provider>
}