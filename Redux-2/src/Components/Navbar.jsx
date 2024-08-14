import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import logo from '../assets/Logo.png'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {
  const cart=useSelector((state)=>state.cart.carts)
  return (
    <nav>
      <div>
      <NavLink to='/'>
        <div>
        <img src={logo} width={32} height={32}/>
        </div>
      </NavLink>
        <div>
        <NavLink to='/'>
        <p>Home</p>
        </NavLink>
          <NavLink to='/cart'>
           <div>
           <BsFillCartFill/>
            {
              cart.length>0 && <span>{cart.length}</span>
            }
           </div>
          </NavLink>
          

        </div>
      </div>

    </nav>
  )
}

export default Navbar
