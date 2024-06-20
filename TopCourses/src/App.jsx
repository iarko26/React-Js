import { useEffect, useState } from 'react'
import { apiUrl,filterData  } from './Data'

import './App.css'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//  Api call with UseEffect
const[courses,setcourses]=useState(null)
useEffect(() => {
  async function FetchData(){
    try{
      let response=await fetch(apiUrl)
      let result=await response.json()
      setcourses(result.data)
      console.log(result.data)
     


    }
    catch{
      toast.error('Something went wrong')

    }
  }
  FetchData()
},[])

  return (
    <div>
<Navbar />
<Filter filterData={filterData} />
<Cards courses={courses} />

<ToastContainer />

    
    </div>
  )
}

export default App
