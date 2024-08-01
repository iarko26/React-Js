
import React, { useContext, useEffect } from 'react'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Pagination from './component/Pagination'
import AppContext from './context/AppContext'
// import { Route,Routes } from 'react-router-dom'
function App() {
  const{fetchpost}=useContext(AppContext);
  
  useEffect(()=>{
fetchpost();
  },[]);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center '>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
