import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
function Home() {
    const url="https://fakestoreapi.com/products";
    const [products,setproducts]=useState([]);
    const[loading,setloading]=useState(false);

    async function fetchData(){
      try{
        setloading(true);
        const response=await fetch(url);
        const data=await response.json();
        setproducts(data);
        console.log(data);


      }
      catch{
        console.log("Product not found");

      }
      finally{
        setloading(false);
      }

    }
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div>
      {
        loading?
        (<h1>Loading....</h1>):(products.length>0?
        (
          products.map((product)=>{
            return(
              <Product key={product.id} product={product}/>
            )
          })
        ):(
          <p>No data found</p>
          )
        
        )
      }
    </div>
  )
}

export default Home
