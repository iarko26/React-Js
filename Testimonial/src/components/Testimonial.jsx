import React from 'react'
import Card from './Card'
import { useState } from 'react'

function Testimonial(props) {
    let info=props.info;
    const[index,setIndex]=useState(0);
    const[ratings,setratings]=useState(new Array(info.length).fill(0));

 let leftindex=()=>{

    let n=info.length;
 if(index===0){
    setIndex(n-1);
 }
 else{
    setIndex(index-1);
 }


 }
 let rightindex=()=>{
    let n=info.length;
    if(index===n-1){
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }

 }
 let handlerating=(rating)=>{
let newrating=[...ratings];
newrating[index]=rating;
setratings(newrating);
console.log(newrating);

 }


  
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md
                                                                                          '>


    <Card review={info[index]} rightindex={rightindex} leftindex={leftindex} rating={ratings[index]} setrating={handlerating}  />
      
    </div>
  )
}

export default Testimonial
