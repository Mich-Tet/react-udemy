import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;
  const increaseHandler = (event) => {
    dispatch(cartActions.increment({ id, title, price }));
  };
  const decreaseHandler = (event) => {
    dispatch(cartActions.decrement(id));
  };

  return (
    <div>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>
              (${price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={increaseHandler}>+</button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
