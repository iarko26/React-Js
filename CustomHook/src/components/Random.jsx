import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';
function Random() {
  //custom hook
const{gif,loading,fetchdata}=useGif()

  return (
    <div className='w-1/2  bg-black rounded-lg border border-red-700 flex flex-col items-center mt-[15px]'>
      <h1 className='text-yellow-700 font-bold text-3xl underline uppercase mt-[15px]  '>A Random GIf</h1>
      
      {
        loading?(<Loader/>):( <img src={gif} width="450"/>)
      }

      <button onClick={()=>fetchdata()} className='text-yellow-700  text-lg font-bold  w-10/12 bg-red-100 cursor-pointer  py-2 rounded-lg mb-[20px] '>Generate GIfs</button>
    </div>
  )
}

export default Random
