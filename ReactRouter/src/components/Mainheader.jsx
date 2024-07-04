import React from 'react'
import { Outlet } from 'react-router-dom'
function Mainheader() {
  return (

     <div>
    {/* To render home page  */}
    <Outlet />

    </div>
   
  )
}

export default Mainheader
