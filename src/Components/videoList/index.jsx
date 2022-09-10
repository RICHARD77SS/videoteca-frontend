import React, { useContext } from 'react';


import { useAxios } from '../../hooks/useAxios';

import { VideoContext } from '../../contexts/videoContext';
import Video from '../video';

import { VideosSt, AddVideoSt } from './styles'



const Videos = () => {
  const { handleAdd } = useContext(VideoContext)
  // const [videos, setVideos] = React.useState([]);
  // React.useEffect(() => {
  //   api.get("/videos").then(({ data }) => {
  //     setVideos(data.videos)
  //   })
  //   //eslint-disable-next-line
  // }, [])

  const { data } = useAxios('videos')

  return (
    <VideosSt>
      {data?.videos?.map((video) => (
        <Video
          key={video._id}
          id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
        />
      ))}
      <AddVideoSt onClick={handleAdd}>
        +
      </AddVideoSt>
    </VideosSt>
  )
}

export default Videos;