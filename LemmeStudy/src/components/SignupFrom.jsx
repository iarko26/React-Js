import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"
function SignupFrom({setloggedin}) {
    const[formdata,setformdata]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })
    const changehandler=(e)=>{
        const [name,value]=e.target;
        setformdata({
            ...formdata,
            [name]:value
        })
    }

    const handledata=(e)=>{
        e.preventDefault();
        console.log(formdata)

    }
    const[showpassword,setpassword]=useState(false)
    const togglepassword=()=>{
        setpassword(!showpassword)
    }
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
    id='name'
    name='fname'
    value={formdata.fname}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor="name"> Last Name</label>
    <input type='text'
    id='name'
    name='lname'
    value={formdata.lname}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor="email"> Email</label>
    <input type='email'
    id='name'
    name='email'
    value={formdata.email}
    placeholder='Enter your name'
    onChange={changehandler}
    />
    <label htmlFor='password'>Create Password</label>
    <input type={showpassword?React('text'):('password')}
    id='password'
    name='password'
    value={formdata.password}
    placeholder='Enter your password'
    onChange={changehandler}
    />
     <span>
        {showpassword ? (<FaEyeSlash onClick={togglepassword}/>) : (<FaEye onClick={togglepassword}/>)}
    </span>
    <label htmlFor='cpassword'>Confirm Password</label>
    <input type={showpassword?React('text'):('password')}
    id='cpassword'
    name='cpassword'
    value={formdata.cpassword}
    placeholder='Enter your password'
    onChange={changehandler}
    />
    <span>
        {showpassword ? (<FaEyeSlash onClick={togglepassword}/>) : (<FaEye onClick={togglepassword}/>)}
    </span>
    <button type='submit'>
        Sign Up
    </button>






    

   </form>
   </div>
  )
}

export default SignupFrom
