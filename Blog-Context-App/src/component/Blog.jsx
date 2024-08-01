import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import AppContextProvider from '../context/AppContextProvider'
function Blog({post}) {



  return (
    <div key={post.id} >
      <h2 className="font-bold text-lg " >{post.title}</h2>
      <p >
        By<span className='italic' > {post.author}</span> on <span className='underline font-bold'>{post.category}</span>
      </p>
      <p >Posted On {post.date}</p>
      <p >{post.content}</p>
      <div >
        {
            post.tags.map((tag,index)=>{
                return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
            })
        }
      </div>
    </div>
  )
}

export default Blog
