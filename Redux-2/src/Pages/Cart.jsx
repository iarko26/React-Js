import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'
function Cart() {
  const cart=useSelector((state)=>state.cart.carts)
  
  const[totalamount,settotalamount]=useState(0);

  //calculate total amount
useEffect(()=>{
  settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
},[cart])

  return (
    <div>
    {
      cart.length>0?
      (
        <div>
        <div>
       {
        cart.map((product,index)=>{
          return(
            <CartItem key={product.id} product={product} itemindex={index}/>
          )
        })
       }


       </div>

       <div>
        <p>Your Cart</p>
        <h1>Summary</h1>
        <div>
          <p>Total Items:{cart.length}</p>
        </div>
        <div>
          <p>Total Amount:{totalamount}</p>
          <button>Checkout</button>
        </div>
        
        <div>

        </div>
       </div>
        </div>
 

       
      
      ):(
        <div>
        <p>The Cart Is Empty</p>
        <Link to='/'><button>Shop Now</button></Link>
        </div>
      )
    }
      
    </div>
  )
}

export default Cart
