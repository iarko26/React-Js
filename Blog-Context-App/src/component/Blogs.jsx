import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import AppContextProvider from '../context/AppContextProvider'
import Loader from './Loader';
import Blog from './Blog';
function Blogs() {
  const {loading,posts}=useContext(AppContext);
  console.log("posts",posts);

  return (
    <div >
      {
        loading? (<Loader/>):(
          posts.length===0?(
            <div><p>No Blogs Found!</p></div>
          ):(
            posts.map((post)=>{
              return <Blog key={post.id} post={post}/>
            })
          )

        )
      }
    </div>
  )
}

export default Blogs
