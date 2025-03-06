import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div  className='relative '>
      <div className='absolute  inset-0 -z-10 w-screen '>
              <img src ={BG_URL}
              alt='logo'
             
              />
              </div>
            
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch;