import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    console.log("Home")
  return (
    <div>
    {/* To let render child routes use outlet
    <Outlet />
      This is Home Page */}

      This is Home Page
    </div>
  )
}

export default Home
