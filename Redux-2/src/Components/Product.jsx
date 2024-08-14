import React, { useState } from 'react'
import Home from '../Pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
function Product({product}) {

  //check the product is selected or not
const cart=useSelector((state)=>state.cart.carts)


//dispatch the action
const dispatch=useDispatch();

const AddCart=()=>{
dispatch(add(product))
toast.success("Product added to cart")

}

const RemoveCart=()=>{
dispatch(remove(product.id))
toast.error("Product removed from cart")
}
  
  return (
    <div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
      <p>
        {product.description}
      </p>

      </div>
      <div>
        <img src={product.image} width={100} height={100}/>
      </div>
      <div>
        <p>
          {product.price}
        </p>
      </div>
      <div>
        {
          cart.some((item)=>item.id===product.id)?
          (
            <button onClick={RemoveCart}>Remove from cart</button>
          ):(
            <button onClick={AddCart}>Add to cart</button>
          )

        }
      </div>
    </div>
  )
}

export default Product
