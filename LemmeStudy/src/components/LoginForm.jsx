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
const togglepassword=()=>{
    setpassword(!showpassword)
}

  return (
   <form onSubmit={handledata}>
    <lable htmlFor="email">Email</lable>
    <input type="email"
    id="email"
    name="email"
    value={formdata.email}
    placeholder='Enter your email'
    onChange={changehandler}
    />
    <lable htmlFor="password">Password</lable>
    <input type={showpassword?("text"):("password")}
    id="password"
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    />
    <span>
        {showpassword ? (<FaEyeSlash onClick={togglepassword}/>) : (<FaEye onClick={togglepassword}/>)}
    </span>
    <Link to='#'>
    
        <p>Forgot Password?</p>

    </Link>

    <button type='submit'>
        Sign In
    </button>

   </form>
  )
}

export default LoginForm
