import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import useGif from '../hooks/useGif';
function Tag() {
   
    const[tag,setTag]=useState('Coding');
    const{gif,loading,fetchdata}=useGif(tag)

  return (
    <div className='w-1/2  bg-black rounded-lg border border-red-700 flex flex-col items-center mt-[15px]'>
      <h1 className='text-yellow-700 font-bold text-3xl underline uppercase mt-[15px]  '>Tag GIf</h1>
      
      {
        loading?(<Loader/>):( <img src={gif} width="450"/>)
      }
      <input className='w-10/12 py-2 rounded-lg mb-[3px] text-yellow-700 text-center bg-red-100 text-lg 
      
        '   type='text'
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            placeholder="Enter a tag"
        />

      <button onClick={()=>fetchdata(tag)} className='text-yellow-700  text-lg font-bold  w-10/12 bg-red-100 cursor-pointer  py-2 rounded-lg mb-[20px] '>Generate GIfs</button>
    </div>
  )
}

export default Tag
