import React from 'react'
import Header from '../component/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../component/Pagination';
import Layout from '../component/Layout';
function Categorypage() {
    const navigate=useNavigate();
    const location=useLocation();
    const category=location.pathname.split('/').at(-1)
    function handleClick(){
        navigate(-1)
    }
    
  return (
  <Layout>
    <div>
        <button onClick={handleClick}>
            Back
        </button>
        <h2>Blogs on <span>{category}</span></h2>
    </div>
  </Layout>
  )
}

export default Categorypage
