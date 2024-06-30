import React from 'react'
import Ucallback from './hooks/Ucallback'
import Ustate from './hooks/Ustate'
import Umemo from './hooks/Umemo'
import URef from './hooks/URef'

import Pass from './components/Pass'
import Ueffect from './hooks/Ueffect'
import Ucontext from './hooks/Ucontext'
import { useState } from 'react'
import { CountContext } from './context/context'
function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  return (
    <div>
<CountContext.Provider value={count}>
<Ucontext  />
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</CountContext.Provider>
    </div>
  )
}

export default App
