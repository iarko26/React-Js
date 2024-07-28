import React from 'react'
import { useState,useEffect } from 'react';
function useGif(tag) {
  const[gif,setchangegif]=useState('');
  const [loading,setloader]=useState(false);
  const API_KEY='smCHYUfkbhojcC3Uq5PMhTY9V3Bc33rN';
 const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  async function fetchdata(tag){
  try{
    setloader(true);
      
      const response=await fetch(tag? `${url}&tag=${tag}` :url );
      const output=await response.json();
      const getgif=output.data.images.downsized_large.url;
      setchangegif(getgif);
   
  }
  catch(error){
      console.error('error');
      
  }
  finally{
    setloader(false)
  }
  
  }

  useEffect(()=>{
    fetchdata("Coding");
},[])

  return{gif,loading,fetchdata}






}

export default useGif
