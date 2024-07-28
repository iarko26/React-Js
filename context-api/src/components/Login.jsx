import React,{useContext,useState} from 'react'
import UserContext from '../context/Userconetxt'
function Login() {
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const {setuser}=useContext(UserContext);
    const checkhandler=(e)=>{
        e.preventDefault();
        setuser({username,password});


    }
  return (
    <div>
      <h2>Login</h2>
      <input 
        type='text'
        placeholder='Enter your username'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
      />
        <input 
        type='text'
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />
      <button onClick={checkhandler}>Login</button>
    </div>
  )
}

export default Login
