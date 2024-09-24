
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import {useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isloggedin,setloggedin]=useState(false);


  return (
    <div className='w-screen h-screen bg-[#161D29] flex flex-col'>
    
<Navbar isloggedin={isloggedin} setloggedin={setloggedin}/>
<Routes>
    <Route path='/' element={<Home isloggedin={isloggedin}/>} />
    <Route path='/login' element={<Login setloggedin={setloggedin}/>}/>
    <Route path='/signup' element={<Signup setloggedin={setloggedin}/>}/>
    <Route path='/dashboard' element={
      <PrivateRoute isloggedin={isloggedin}>
        <Dashboard/>
      </PrivateRoute>
      
  }/>
  
  </Routes>
<ToastContainer />
    </div> 

  )
}

export default App
