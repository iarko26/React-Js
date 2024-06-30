import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../context/context'


function Component1() {
    const counter=useContext(CountContext)
  return (
    <div>
        {counter}
    </div>
  )
}

export default Component1