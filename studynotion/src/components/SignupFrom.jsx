import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
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
    const changehandler=(e)=>{
        const {name,value}=e.target;
        setformdata({
            ...formdata,
            [name]:value
        })
    }
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


    const[showpassword,setpassword]=useState(false)
    const [showConfirmPassword,setConfirmPassword]=useState(false)
    const[accounttype,setaccounttype]=useState('student')
    const data={
        ...formdata,
        accounttype
    }
    console.log(data)

  return (
    <div>
    <div className='flex bg-yellow-500 p-1 gap-x-1 my-6 rounded-full max-w-max'>
    <button 
  onClick={() => setaccounttype("student")}
  className={`${accounttype === "student" ? 
    "bg-yellow-900 text-richblack-5" : 
    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
>
  Student
</button>
<button onClick={() => setaccounttype("instructor")} 
  className={`${accounttype === "instructor" ? 
    "bg-yellow-900 text-richblack-5" : 
    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
  Instructor
</button>
    </div>
   <form onSubmit={handledata} >
   {/* FIRST AND LAST NAME */}
   <div className='flex  gap-x-9 mt-[20px]'>
   <label> 
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]' >First Name</p>
    <input type='text'
    id='fname'
    name='fname'
    value={formdata.fname}
    placeholder='Enter your name'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label>
    <label > 
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]' >Last Name</p>
    <input type='text'
    id='lname'
    name='lname'
    value={formdata.lname}
    placeholder='Enter your name'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label>
   </div>
   <div className='mt-[20px]'>
   <label className='w-full  mt-[20px]'> 
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]' >Email</p>
    <input type='email'
    id='email'
    name='email'
    value={formdata.email}
    placeholder='Enter your name'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    </label></div>
   
    <div className='w-full flex gap-x-4 mt-[20px]'>
    <label className='w-full relative' >
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]' >Create Password</p>
    <input type={showpassword?('text'):('password')}
    id='password'
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
    
     <span onClick={()=>setpassword(prev=>!prev)} className='absolute right-3 top-[38px] cursor-pointer' >
       {showpassword ? (<FaEyeSlash fontSize={24} fill='#AFB2BF'  />) : (<FaEye fontSize={24} fill='#AFB2BF' />)}
    </span>
    </label>
    <label className='w-full relative'  >
    <p className='text-[1rem] text-yellow-400 mb-1 leading-[1.375rem]' >Confirm Password</p>
    <input type={showConfirmPassword?('text'):('password')}
    id='cpassword'
    name='cpassword'
    value={formdata.cpassword}
    placeholder='Enter your password'
    onChange={changehandler}
    className='bg-yellow-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
    />
   
     <span onClick={()=>setConfirmPassword(prev=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
       {showConfirmPassword ? (<FaEyeSlash  fontSize={24} fill='#AFB2BF'/>) : (<FaEye  fontSize={24} fill='#AFB2BF' />)}
    </span>
    </label>
    </div>
    
    <button type='submit' className='w-full bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Sign Up
    </button>
   </form>
   </div>
  )
}

export default SignupFrom
