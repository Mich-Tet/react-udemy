import classes from './CartButton.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
const CartButton = (props) => {
  const quantity = useSelector((state) => state.cart.quantity);

  const disptach = useDispatch();
  const toggleCartHandler = (event) => {
    event.preventDefault();
    disptach(cartActions.toggle());
  };
  return (
    <button
      className={classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
