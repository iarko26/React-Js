import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/slices/CounterSlice'
function App() {
   
// particular value fetched from the slice using useSelector
const count=useSelector((state)=>state.counter.value)
//to call the action use useDispatch

const dispatch=useDispatch()

  return (
    <div className='flex gap-[20px]'>
      <button onClick={()=>dispatch(decreament())}>Dec</button>
      <div>{count}</div>
      <button onClick={()=>dispatch(increament())}>Add</button>
    </div>
  )
}

export default App
