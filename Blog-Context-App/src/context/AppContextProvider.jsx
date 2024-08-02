import AppContext from "./AppContext";
import React, { useEffect } from 'react'
import baseURl from'../baseURl';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
function AppContextProvider({children}) {
    //loading
    const [loading,setloading]=useState(false);
    //post
    const[posts,setposts]=useState([]);
    //page
    const [page,setpage]=useState(1);
    //totalPages
    const [totalPages,settotalPages]=useState(null);
     const navigate=useNavigate();
    //fetch data from api
    async function fetchpost(page=1,tag=null,category){

        let url=`${baseURl}?page=${page}`;
        setloading(true);
        if(tag){
          url+=`&tag=${tag}`
        }
        if(category){
          url+=`&category=${category}`
        }
        try{
            const response=await fetch(url);
            const output=await response.json();
            console.log(output);
            setpage(output.page);
            setposts(output.posts);
            settotalPages(output.totalPages);
        }
        catch(erorr){
            console.error(erorr);
          
            setpage(1);
            setposts([]);
            settotalPages(null);

        }
        setloading(false);
        
    }


    //handle api call


    //go to next page and previous page 
    function handlepages(page){
      //to show the page number in the url
      navigate({search:`?page=${page}`})
      
      setpage(page);

    }





    //send value to the consumer
const consumervalue={
    loading,
    setloading,
    posts,
    setposts,
    page,
    setpage,
    totalPages,
    settotalPages,
    handlepages,
    fetchpost

}
  return (
    <AppContext.Provider value={consumervalue} >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
