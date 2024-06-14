import { useState } from 'react' // useState is a React Hook that lets you add a state variable to your component 
import './App.css'

function App() {
  let [Counter,setCount]=useState(0) //return array with two values

// // basic javascript function
// const addval=()=>{
//   let cnt=document.getElementById('count')
//   Counter++
//   cnt.innerHTML=Counter
//   console.log(Counter)
// }
// // basic javascript function
// const decval=()=>{
//   let cnt=document.getElementById('count')
//   Counter--
//   cnt.innerHTML=Counter
//   console.log(Counter)
// }

//React Function
let addval=()=>{

  if(Counter===20){
    Counter=0
    setCount(Counter)


  

  }
  Counter=Counter+1

  setCount(Counter)

  console.log("Adding",Counter)


}
let decval=()=>{
 
  Counter=Counter-1
  setCount(Counter)
  console.log("Decreasing",Counter)

}

  return (
    <div className='container'>
    <h1 className='heading'>Counter App</h1>
  
    <div className='navbar'>
    <button onClick={decval}>Dec Value</button>
    <h2 id='count'>{Counter}</h2>
    <button onClick={addval}>Add Value</button>
    
  


    </div>



    </div>
  )
}

export default App
