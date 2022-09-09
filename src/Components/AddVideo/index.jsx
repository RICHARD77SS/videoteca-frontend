import React from 'react';
import Video from '../EditVideo';

import { VideosSt, AddVideoSt } from './styles'

import api from '../../services/api';

const Videos = () => {

  const [videos, setVideos] = React.useState([]);


  React.useEffect(() => {
    api.get("/videos").then(({ data }) => {
      setVideos(data.videos)
    })
    console.log(videos)  
    //eslint-disable-next-line
  }, [])
  return (
    <VideosSt>
      {videos?.map((video) => (
        <Video
          key={video._id}
          id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
        />
      ))}
      <AddVideoSt>
        +
      </AddVideoSt>
    </VideosSt>
  )
}

export default Videos;