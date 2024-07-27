import React from 'react'
import Template from '../components/Template'
import loginimg from '../assets/login.gif'

function Login({setloggedin}) {
  return (
    <div>
      <Template
        title="Welcome Here"
        description="Dive back into your learning journey with LemmeStudy. Log in to access personalized resources and continue your path to success"
        image={loginimg}
        formtype='Login'
        setloggedin={setloggedin}
      />


    </div>
  )
}

export default Login
