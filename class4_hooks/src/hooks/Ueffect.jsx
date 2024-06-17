import React, { useEffect, useState } from 'react'

function Ueffect() {
    const [text,setText]=useState()
    const [name,setname]=useState()
  

function changeText(e){
    setText(e.target.value)

    console.log(text)
}

function changename(e){
    setname(e.target.value)

    console.log(name)

}
    useEffect(()=>{
      console.log('useEffect')

    },[name])

   
  return (


    <div className='flex flex-col justify-center items-center mt-20'>
    <input className='bg-blue-400 rounded-lg p-8 text-black' type='text' onChange={changeText} placeholder='Text'></input>
    <input className='bg-blue-400 rounded-lg p-8 text-black' type='text' onChange={changename} placeholder='Name'></input>
 

    </div>
  )
}

export default Ueffect
