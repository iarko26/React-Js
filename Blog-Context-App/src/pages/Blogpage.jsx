import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';
import Blog from '../component/Blog';
import Loader from '../component/Loader';
import Header from '../component/Header';
import baseURl from '../baseURl';
function Blogpage() {
  const[blog,setblog]=useState(null);
  const[relatedblogs,setrelatedblogs]=useState([]);
  const{loading,setloading}=useContext(AppContext);
 const location=useLocation();
 const navigate=useNavigate();
let blogId=location.pathname.split('/').at(-1);
function handleClick(){
  navigate(-1)
}
async function fetchblogbyId(){
  setloading(true);
  let url=`${baseURl}?blogId=${blogId}`;
  console.log("This is the url",url);
  try{
    const response=await fetch(url);
    let output=await response.json();
    console.log(output);
    setblog(output.blog);
    setrelatedblogs(output.relatedblogs);


  }
  catch(erorr){
    console.error(erorr);
    setblog(null);
    setrelatedblogs([]);
  }
  setloading(false);
}
useEffect(()=>{
 if(blogId){
   fetchblogbyId();
 }
},[location.pathname]);

  return (
    <div>
      <Header />
      <div>
      <button onClick={handleClick}>
            Back
        </button>
        {
          loading ? <Loader/> : blog ?
           (<div>
           <Blog post={blog}/>
           <h2>Related Blogs</h2>
           {
            relatedblogs.map((post)=>{
              <div key={post.id}>
              <Blog post={post}/>
              </div>
              
            })
           }
          
          </div>) : (<div><h2>No Blog Found</h2></div>)
        }
      </div>
   
    </div>
  )
}

export default Blogpage
