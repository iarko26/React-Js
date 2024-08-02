import React, { useContext,} from 'react'
import AppContext from '../context/AppContext'
import AppContextProvider from '../context/AppContextProvider'
import { Link } from 'react-router-dom'
function Blog({post}) {



  return (
    <div key={post.id} >
<Link to={`blog/${post.id}`} >
    <h2 className="font-bold text-lg " >{post.title}</h2>
</Link>
    
      
      <p >
        By<span className='italic' > {post.author}</span> on 
        <Link to={`categories/${post.category.replaceAll(" ","-")}`}>
        <span className='underline font-bold'>{post.category}</span>
        </Link>
     
      </p>
      <p >Posted On {post.date}</p>
      <p >{post.content}</p>
      <div >
        {
            post.tags.map((tag,index)=>{
              return (
              <Link key={index} to={`tags/${tag.replaceAll(" ","-")}`} >
             <span  className="text-blue-700 underline font-bold text-xs mt-[5px] mr-2">{`#${tag}`}</span> 
              </Link>
              )
            })
        }
      </div>
    </div>
  )
}

export default Blog
