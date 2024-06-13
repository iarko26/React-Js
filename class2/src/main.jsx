import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>My App</h1>
      <p>My App is the best</p>
    </div>
  )
}
// react is working like that
// one way to create element
const anotherElement =(
<a href='http://www.google.com' target='_blank'> Click me to visit google</a>
)
const anotheruser="Chai ar Vite";
// another way to create element
const reactElement=React.createElement(
  'p',
  {style:{color:'red'}

},
"React is working",
anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
    {anotherElement}
  
    <MyApp/>
    {reactElement}
    </div>

  </React.StrictMode>,
)
