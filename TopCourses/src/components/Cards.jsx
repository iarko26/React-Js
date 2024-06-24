import React, { useState } from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

function Cards(props) {
  const { category, courses } = props;
  const[likes,setLikes]=useState([]);

  const getAllCourses = () => {
    if (!courses) {
      return [];
    }

    if (category === 'All') {
      let coursesArray = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          coursesArray.push(course);
        });
      });
      console.log(coursesArray);
      return coursesArray;
    } else {
      if (courses[category]) {
        return courses[category];
      } else {
        toast.error('No courses found');
        return [];
      }
    }
  };

  return (
    <div className='CoursesCard'>
      {getAllCourses().map((course) => (
        <Card key={course.id} course={course} likes={likes} setLikes={setLikes}/>
      ))}
    </div>
  );
}

export default Cards;
