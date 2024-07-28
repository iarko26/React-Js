import React from 'react'
import Template from '../components/Template'
import loginimg from '../assets/login.jpg'

function Signup({setloggedin}) {
  
  return (
    <div>
      <Template
            title="Join Us Today "
        description="Unlock your potential with LemmeStudy. Sign up now to discover a world of knowledge and take the first step towards achieving your learning goals"
        image={loginimg}
        formtype='signup'
        setloggedin={setloggedin}
       />
    </div>
  )
}

export default Signup
