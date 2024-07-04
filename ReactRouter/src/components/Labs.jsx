import React from 'react'
import { useNavigate } from 'react-router-dom'
function Labs() {
    const navigate=useNavigate();
    function clicknavigate(){
navigate('/about');
    }
    function backnavigate(){
        navigate('/about')
    }
  return (
    <div>
    <div> This is lab page</div>
    <button className='rounded-md bg-red-400' onClick={clicknavigate}>Move to About Page</button>
    <button className='rounded-md bg-red-400' onClick={backnavigate}>Go Back</button>
    
     
    </div>
  )
}

export default Labs
