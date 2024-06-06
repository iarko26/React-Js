import './Card.css';
function Card(props){
    return(
        <div className='cardname'>
            {props.children};
        </div>
    )
}
export default Card;