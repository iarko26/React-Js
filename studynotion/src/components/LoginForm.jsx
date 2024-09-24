import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function LoginForm({setloggedin}) {
    const navigate=useNavigate();
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const[showpassword,setpassword]=useState(false)
    const changehandler=(e)=>{
    const {name,value}=e.target;
    setformdata({
        ...formdata,
        [name]:value
    })
    }
const handledata=(e)=>{
    e.preventDefault()
    setloggedin(true)
    toast.success('Login Successfull')
    navigate('/dashboard');




}


  return (
   <form onSubmit={handledata} className="flex flex-col w-full gap-y-4 mt-6">
    <lable className='w-full'>
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]'>Email</p>
    <input type="email"
    id="email"
    name="email"
    value={formdata.email}
    placeholder='Enter your email'
    onChange={changehandler}
     className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </lable>
    <lable className='w-full relative' >
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]'>Password</p>
    <input type={showpassword?("text"):("password")}
    id="password"
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    <span onClick={()=>setpassword((prev)=>!prev)} className='absolute right-3 top-[38px]  cursor-pointer'>
        {showpassword ? (<FaEyeSlash  fontSize={24} fill='#AFB2BF' />) : (<FaEye fontSize={24} fill='#AFB2BF' />)}
        
    </span>
    <Link to='#'>
    
        <p className='text-xs mt-1 text-yellow-400  max-w-max ml-auto'>Forgot Password?</p>

    </Link>
    </lable>
    

    <button type='submit' className='bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Sign In
    </button>

   </form>
  )
}

export default LoginForm
