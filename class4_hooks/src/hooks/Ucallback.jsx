
import { useState,useCallback } from 'react'
import Ucallback2 from './Ucallback2'

function Ucallback() {

    let [count,setCount]=useState(8)
 const parentElement=useCallback(()=>{
    setCount(count+1)


 },[count])


  return (
    <div>
    <Ucallback2 />
    <button onClick={parentElement}>Parent:{count}</button>

      
    </div>
  )
}

export default Ucallback
