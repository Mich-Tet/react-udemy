import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { cartActions } from '../store/cart-slice';
const ProductItem = (props) => {
  const disptach = useDispatch();

  const title = useSelector((state) => state.cart.title);
  const price = useSelector((state) => state.cart.price);
  const description = useSelector((state) => state.cart.description);

  const addHandler = (event) => {
    event.preventDefault();
    disptach(cartActions.increment());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
