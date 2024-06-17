import React, { useCallback } from 'react'
import { useRef } from 'react'


function URef() {

  const InputRef=useRef(null)

const handleInput=()=>{
 InputRef.current.focus()
  console.log( InputRef.current.value)

}
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
    <input ref={InputRef} type='text' className='bg-blue-400 rounded-lg p-8 text-black' />
    <button onClick={handleInput}>Focus in the input</button>
      
    </div>
  )
}

export default URef

