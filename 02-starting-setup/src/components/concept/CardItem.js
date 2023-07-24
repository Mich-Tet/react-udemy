
import './CardItem.css';
const CardItem = (props) => {

    return (
            <li className='concept'>
                <img src={props.image} alt="1" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </li>
    );
}
export default CardItem