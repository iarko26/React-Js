import React from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import Filter from './Filter';
import { toast } from 'react-toastify';

function Card(props) {
  const { course,likes,setLikes } = props;
  function likeclick(){
    if(likes.includes(course.id)){
      setLikes((likes)=>likes.filter((id)=>id!==course.id))
      toast.warning(`Removed from Liked Courses: ${course.title}`)
 
    }
    else{
      setLikes([...likes,course.id])
      toast.success(`Added to Liked Courses: ${course.title}`)

    }
    
    


  }

  return (
    <div className='card'>
      <img src={course.image.url} alt={course.title} />
      <div className='card-content'>
        <button onClick={likeclick}>
          {likes.includes(course.id)?<FcLike fontSize='1.75rem' />:<FcLikePlaceholder fontSize='1.75rem' />}
        </button>
        <h2 className='card-title'>{course.title}</h2>
        <p className='card-description'>{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
