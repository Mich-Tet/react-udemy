
import CardItem from './CardItem';
import './Cards.css';
const Cards = (props) => {
    return (
        <div>
            <ul id="concepts">
                <CardItem 
                        title={props.concepts[0].title}
                        image={props.concepts[0].image}
                        description={props.concepts[0].description}
                />
                <CardItem 
                        title={props.concepts[1].title}
                        image={props.concepts[1].image}
                        description={props.concepts[1].description}
                />
                <CardItem 
                        title={props.concepts[2].title}
                        image={props.concepts[2].image}
                        description={props.concepts[2].description}
                />
            </ul>
        </div>
    );
}
export default Cards