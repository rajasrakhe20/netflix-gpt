import React from 'react'
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='p-6 text-lg w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='bg-white
         text-black py-1 px-10 text-l  rounded-sm flex items-center hover:bg-opacity-80 transition-all duration-300 ease-in-out '><FaPlay className='m-2'/>Play</button>
        <button className='mx-4 bg-gray-300 bg-opacity-40 
         text-white py-1 px-6 text-l hover:bg-opacity-30 rounded-sm flex items-center transition-all duration-300 ease-in-out'>
          <LuInfo className='m-2'/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;