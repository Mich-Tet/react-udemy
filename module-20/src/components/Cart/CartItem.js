import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const CartItem = (props) => {
  const dispatch = useDispatch();
  const increaseHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.increment());
  };
  const decreaseHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.decrement());
  };
  const title = useSelector((state) => state.cart.title);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.totalPrice);
  const price = useSelector((state) => state.cart.price);

  const isThereSomethingInTheCart = quantity === 0 ? false : true;
  return (
    <div>
      {isThereSomethingInTheCart ? (
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
      ) : (
        <p>Nothing in the cart</p>
      )}
    </div>
  );
};

export default CartItem;
