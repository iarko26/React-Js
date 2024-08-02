import React from 'react'
import Header from './Header'
import Blogs from './Blogs'
import Pagination from './Pagination'

function Layout({children}) {
  return (
    <div>
    <Header/>
    {children}
    <Blogs/>
    <Pagination/>
      
    </div>
  )
}

export default Layout
