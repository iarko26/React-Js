import React from 'react'
import Card from './Card';

function Cards({courses}) {
  //return all courses in one array from api
  function getAllcourses(){
    let allCourses=[];
    Object.values(courses).forEach((getCourseCatagory)=>{
      getCourseCatagory.forEach((courses)=>{
        allCourses.push(courses)
      })

      
    
    })
    return allCourses;

  
  }
  return (
    <div className='CoursesCard'>
  

    

      
    </div>
  )
}

export default Cards
