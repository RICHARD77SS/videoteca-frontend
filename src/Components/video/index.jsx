import React from 'react';
import { VideoContext } from '../../contexts/videoContext';
import { EditSt, Flex, Button } from './styles';
import { IoPencil, IoThumbsUp, IoTrashBin } from 'react-icons/io5'

const Video = ({ id, title, link, liked }) => {
  const { handleEdit, handleLike, handleDelete } = React.useContext(VideoContext);
  

  return (
    <EditSt>
      <h2>{title}</h2>
      <a href={link} target='_blank' rel="noreferrer">{link}</a>
      <Flex>
        <Button liked={liked} type='button' onClick={()=>handleLike(id)}>

          <IoThumbsUp />
        </Button>
        <Button type='button' onClick={()=>handleEdit(id, title, link)}>
          <IoPencil />
        </Button>
        <Button type='button' onClick={()=>handleDelete(id)}>
          <IoTrashBin />
        </Button>
      </Flex>
    </EditSt>
  )
}

export default Video;