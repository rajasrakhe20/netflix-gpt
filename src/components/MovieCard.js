import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className='w-36 pr-4 transform transition-transform duration-300 hover:scale-105 hover:z-10'>
        <img 
          alt="Movie Card Image"
          src={IMG_CDN_URL + posterPath}
          className='w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110'
        />
    </div>
  )
}

export default MovieCard;