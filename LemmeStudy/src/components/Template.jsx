import React from 'react'
import { FaGoogle } from "react-icons/fa6";
import SignupFrom from './SignupFrom';
import LoginForm  from './LoginForm';

function Template(props) {
    let {title,description,image,formtype,setloggedin}=props

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
      
      {formtype === 'signup' ? 
      
        (<SignupFrom setloggedin={setloggedin}/>):
        (<LoginForm setloggedin={setloggedin}/>)
     
      }


      <div></div>
      <div>OR</div>
      <div></div>

      </div>
      <div>
        <button>
        <FaGoogle />
        <p>Sign Up With Google</p>
        </button>
      </div>
      <div>
       img src={image} 
    
       alt='image'
       
      </div>

 
    </div>
  )
}

export default Template
