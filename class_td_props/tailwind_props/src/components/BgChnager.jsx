import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

function BgChnager() {
    
    const [color,changecolor]=useState("red")


    let getcolor=()=>{
        let colors="0123456789abcdef"
        let colorCode="#"
        for(let col=0;col<6;col++){
 colorCode+=colors[Math.floor(Math.random()*16)]
    
        }
        return colorCode
    }

    let handlecolor=()=>{
        let newColor=getcolor()
        changecolor(newColor)

        

    }


    
  return (
    <div className='w-full h-screen'style={{backgroundColor:color}} >


    <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
    <div className=' flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3  rounded-3xl '>

        <button  onClick={handlecolor}
        className='outline-none rounded-full px-4 py-1 text-white  font-bold shadow-sm' style={{backgroundColor:color}} >
Change Color
        </button>

    </div>
    </div>

 


      
    </div>
  )
}

export default BgChnager
