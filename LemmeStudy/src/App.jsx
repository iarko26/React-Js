
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import {useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
function App() {
  const [isloggedin,setloggedin]=useState(false);
  return (
    <div>
<Navbar isloggedin={isloggedin} setloggedin={setloggedin} />
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  
  </Routes>
<ToastContainer />
    </div> 

  )
}

export default App
