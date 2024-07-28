import React,{useContext,useState} from 'react'
import UserContext from '../context/Userconetxt'
import Login from './Login'
function Profile() {
    const {user}=useContext(UserContext);
    if(!user)  return (<div>Please Login</div>)
        return(
            <div>
                <h2>Welcome To Your Profile {user.username}</h2>
                
            </div>
        )

}

export default Profile
