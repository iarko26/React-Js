import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function SignupFrom({setloggedin}) {
    const navigate=useNavigate();
    const[formdata,setformdata]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })
    
    const handledata=(e)=>{
        e.preventDefault()
        if(formdata.password !== formdata.cpassword){
            toast.error('Password and Confirm Password should be same')
            return;
        }
     setloggedin(true)
    toast.success('Signup Successfull')
    console.log(formdata)
    navigate('/dashboard')
    }
    const changehandler=(e)=>{
        const {name,value}=e.target;
        setformdata({
            ...formdata,
            [name]:value
        })
    }

    const[showpassword,setpassword]=useState(false)
    const [showConfirmPassword,setConfirmPassword]=useState(false)

  return (
    <div>
    <div>
        <button>
           Student
        </button>
        <button>
           Instructor
        </button>
    </div>
   <form onSubmit={handledata}>
    <label htmlFor="name"> First Name</label>
    <input type='text'
    id='fname'
    name='fname'
    value={formdata.fname}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor="name"> Last Name</label>
    <input type='text'
    id='lname'
    name='lname'
    value={formdata.lname}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor="email"> Email</label>
    <input type='email'
    id='email'
    name='email'
    value={formdata.email}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor='password'>Create Password</label>
    <input type={showpassword?('text'):('password')}
    id='password'
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    />
     <span onClick={()=>setpassword(prev=>!prev)}>
       {showpassword ? (<FaEyeSlash />) : (<FaEye />)}
    </span>
    <label htmlFor='cpassword'>Confirm Password</label>
    <input type={showConfirmPassword?('text'):('password')}
    id='cpassword'
    name='cpassword'
    value={formdata.cpassword}
    placeholder='Enter your password'
    onChange={changehandler}
    />
     <span onClick={()=>setConfirmPassword(prev=>!prev)}>
       {showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)}
    </span>
    <button type='submit'>
        Sign Up
    </button>






    

   </form>
   </div>
  )
}

export default SignupFrom
