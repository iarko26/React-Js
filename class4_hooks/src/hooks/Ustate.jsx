import React from 'react'
import { useState } from 'react'
import '../hooks/Ustate.css'

function Ustate() {
    let [count,setCount]=useState(4)
const addval=()=>{
setCount(prevCount=>prevCount+1)
}
const decval=()=>{
    setCount(prevCount=>prevCount-1)
}


  return (
    <div class="button-container">
    <button class="button-3d" onClick={decval}>
      <div class="button-top">
        <span class="material-icons">-</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
  <>
    {count}
  </>
    <button class="button-3d" onClick={addval}>
      <div class="button-top">
        <span class="material-icons">+</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
  </div>
    
      

  )
}

export default Ustate
