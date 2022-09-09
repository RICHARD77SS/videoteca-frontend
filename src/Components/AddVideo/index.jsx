import React from 'react';
import Video from '../EditVideo';

import { VideosSt, AddVideoSt } from './styles'


const Videos = () => {
  return (
    <VideosSt>
      <Video
        id={1}
        title='Title test'
        link='https://www.localhost:3000/videos'
        liked={true}
      />
      <AddVideoSt>
        +
      </AddVideoSt>
    </VideosSt>
  )
}

export default Videos;