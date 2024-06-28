import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { toast } from 'react-toastify';
function Card(props) {
const {review,leftindex,rightindex,rating,setrating}=props;
let handlerate=(rate)=>{
if(rating===rate){
    setrating(Math.max(rating-1,0));
    toast.warning(`You have removed you rating of ${rate} for ${review.name}`)
}
else{
    setrating(rate);
    toast.success(`You have rated ${review.name} ${rate} stars`)

}
}


  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' 
        src={review.image}/>
      </div>
      <div className='text-center mt-7'>
      <h2 className='font-bold text-2xl capitalize'>{review.name}</h2>
        <p className='text-violet-300 uppercase text-sm'>{review.type}</p>

      </div>
      <div className='text-violet-400 mx-auto mt-5'>
      <FaQuoteLeft />
      </div>
      <div className='text-center mt-4 text-slate-500'>

{review.desc}

      </div>
      <div className='text-violet-400 mx-auto mt-5'>
      <FaQuoteRight />
      </div>

      <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
        <button onClick={leftindex} 
        className='cursor-pointer hover:text-violet-500 '>
            <FaChevronLeft />
        </button>
        <button onClick={rightindex} 
        className='cursor-pointer hover:text-violet-500 '>
            <FaChevronRight />
        </button>
      </div>

      <div className='mt-6'>
      <div className='flex flex-row justify-center items-center cursor-pointer' >
      {
        [1,2,3,4,5].map((star)=>{
            return(
                <FaStar
              key={star}
              className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              onClick={() => handlerate(star)}
            />
            )
   
        })
      }



      </div>

      </div>
    </div>
  )
}

export default Card
