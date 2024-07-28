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

    console.log(formdata)


}


  return (
   <form onSubmit={handledata} className="flex flex-col w-full gap-y-4 mt-6">
    <lable className='w-full'>
    <p className='text-[0.875rem] text-green-700 mb-1 leading-[1.375rem]'>Email</p>
    <input type="email"
    id="email"
    name="email"
    value={formdata.email}
    placeholder='Enter your email'
    onChange={changehandler}
     className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </lable>
    <lable >
    <p>Password</p>
    <input type={showpassword?("text"):("password")}
    id="password"
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    />
    <span onClick={()=>setpassword((prev)=>!prev)}>
        {showpassword ? <FaEyeSlash /> : <FaEye />}
        
    </span>
    <Link to='#'>
    
        <p>Forgot Password?</p>

    </Link>
    </lable>
    

    <button type='submit'>
        Sign In
    </button>

   </form>
  )
}

export default LoginForm
