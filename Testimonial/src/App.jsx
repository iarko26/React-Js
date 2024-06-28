import React from 'react';
import Testimonial from './components/Testimonial';
import info from "./Data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

function App() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonial info={info} />
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default App;
