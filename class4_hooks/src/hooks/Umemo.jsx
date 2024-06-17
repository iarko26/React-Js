import React, { useMemo } from 'react'
import './Ustate.css'
import { useState } from 'react'

function Umemo() {
    let [count,setCount]=useState(4)
    let [count1,setCount1]=useState(4)
    const addval=()=>{
     
    setCount(count+1)
    }
    const decval=()=>{
        setCount1(count1-1)
    }
   const even= useMemo(()=>{
        console.log('Even')
        let i=0
        while(i<200000000 ) i++
        return count%2===0
    },[count])

    
    
  return (
    <div>
       <div class="button-container">
    <button class="button-3d" onClick={decval}>
      <div class="button-top">
        <span class="material-icons">-:{count1}</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
  <>
    {count}
    {even?'Even':'Odd'}
  </>
    <button class="button-3d" onClick={addval}>
      <div class="button-top">
        <span class="material-icons">+:{count}</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
  </div>
    </div>
  )
}

export default Umemo
