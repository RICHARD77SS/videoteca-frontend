import React,{ createContext, useState } from 'react';
import FormModal from '../Components/FormModal';
import api from './../services/api';



export const VideoContext = createContext();

export function VideoContextProvider({ children }) {

  const [openFormModal, setOpenFormModal] = useState();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleAdd() {
    setOpenFormModal(true);
  }
  function handleClose() {
    setOpenFormModal(false);
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
    api.post('videos', video);

    setOpenFormModal(false);
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
      handleSubmit
    }}>
    {children}
    {openFormModal && <FormModal />}
  </VideoContext.Provider>
}