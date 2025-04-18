import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

//fetch trailer and for this I need movie Id and here updating the store with trailer video data
const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

  useMovieTrailer(movieId);
 
  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-video' 
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
      }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      
       >
      </iframe>
      
    </div>
  )
}

export default VideoBackground;