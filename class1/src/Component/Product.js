import './Product.css'
function Product(props){
   const name=props.name;
    return(
    <div>
<p className="Car">{name}</p>
{props.children}
    </div>
    )
}
export default Product;