import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
function CartItem({product,itemindex}) {
  const dispatch=useDispatch();
  const removecart=()=>{
    dispatch(remove(product.id))
    toast.error("Product removed from cart")
  }
  return (
    <div key={itemindex}>
      <div>
      <div>
        <img src={product.image} width={100} height={100}/>
      </div>
      <div>
        <h1>
          {product.title}
        </h1>
        <p>
          {product.description}
        </p>
      </div>
      <div>
        <p>
          {product.price}
        </p>
        <button onClick={removecart}>
          <FaTrash/>
        </button>
      </div>


      </div>
    </div>
  )
}

export default CartItem
