import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import SignupForm from './SignupFrom';
import LoginForm from './LoginForm';
import { TypeAnimation } from 'react-type-animation';

function Template(props) {
  const { title, description, image, formtype, setloggedin } = props;

  return (
  <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
    <div  >
      <TypeAnimation 
       sequence={[
            title, 
            1000, 
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity} 
          className='text-yellow-400 font-semibold text-[1.875rem] leading-[2.375rem]'
           />
     
        <p className='text-[1.125rem] leading-[1.625rem] mt-2 text-white '>
             
        {description}
        </p>
    
       


      {formtype === 'signup' ? (
          <SignupForm setloggedin={setloggedin} />
        ) : (
          <LoginForm setloggedin={setloggedin} />
        )}


        <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-yellow-700'></div>
                <p className='text-white font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-yellow-700'></div>
            </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border bg-yellow-500 px-[12px] py-[8px] gap-x-2 mt-6'>
          <FaGoogle />
          <p>Sign Up With Google</p>
        </button>
     
    </div>
    
    <div className='w-11/12 max-w-[450px]'>
        <img src={image} alt='signup' width={558} height={490} className=' -top-4 right-4'  />
      </div>
  </div>
  );
}

export default Template;
