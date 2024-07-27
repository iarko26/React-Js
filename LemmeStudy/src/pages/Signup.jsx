import React from 'react'
import Template from '../components/Template'
import Signimg from '../assets/Signup.gif'

function Signup({setloggedin}) {
  return (
    <div>
      <Template
            title="Join Us Today "
        description="Unlock your potential with LemmeStudy. Sign up now to discover a world of knowledge and take the first step towards achieving your learning goals"
        image={Signimg}
        formtype='signup'
        setloggedin={setloggedin}
       />
    </div>
  )
}

export default Signup
