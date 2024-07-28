import React from 'react'
import UserContext from './Userconetxt'
import { useState } from 'react';
function UserContexrProvider({children}) {
    const [user,setuser]=useState(null);


  return (
    <UserContext.Provider value={{user,setuser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContexrProvider
