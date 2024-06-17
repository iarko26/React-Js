import React,{memo, useState}from 'react'

function Ucallback2() {
    const [childcount,setChildCount]=useState(0)
    console.log('child')
  return (
    <div>
    <h1>Child</h1>
<button onClick={()=>setChildCount(childcount+1)}>Child Count:{childcount}</button>

      
    </div>
  )
}

export default memo(Ucallback2)
