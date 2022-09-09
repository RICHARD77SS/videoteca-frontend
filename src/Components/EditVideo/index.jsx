import React from 'react';

import { EditSt, Flex, Button } from './styles';
import { IoPencil, IoThumbsUp, IoTrashBin } from 'react-icons/io5'

const Edit = ({ id, title, link, liked }) => {
  return (
    <EditSt>
      <h2>{title}</h2>
      <a href={link} target='_blank' rel="noreferrer">{link}</a>
      <Flex>
        <Button liked={liked} type='button'>

          <IoThumbsUp />
        </Button>
        <Button type='button'>
          <IoPencil />
        </Button>
        <Button type='button'>
          <IoTrashBin />
        </Button>
      </Flex>
    </EditSt>
  )
}

export default Edit;