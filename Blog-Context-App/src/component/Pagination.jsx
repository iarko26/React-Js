import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import AppContextProvider from '../context/AppContextProvider'
function Pagination() {
  const{page,handlepages,totalPages}=useContext(AppContext)
  console.log("page",page);
  console.log("totalPages",totalPages);
  
  return (
    <div >
    <div >
    {
        
        page>1 && <button onClick={()=>handlepages(page-1)}>Previous</button>
        

      }
      {
        page<totalPages && <button onClick={()=>handlepages(page+1)} >Next</button> 
      }
      {
       <p >Page {page} of {totalPages}</p> 
      }
 
    </div>


    </div>
  )
}

export default Pagination
