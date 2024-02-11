import React from 'react'
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='p-6 text-lg w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='bg-white
         text-black p-4 px-14 text-xl  rounded-lg flex items-center hover:bg-opacity-80 '><FaPlay className='m-2'/>Play</button>
        <button className='mx-2 bg-gray-500
         text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg flex items-center'>
          <LuInfo className='m-2'/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;