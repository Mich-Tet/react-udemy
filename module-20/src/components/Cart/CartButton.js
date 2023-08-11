import classes from './CartButton.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { toggleActions } from '../store/toggle-slice';
const CartButton = (props) => {
  const cQuantity = useSelector((state) => state.cart.totalQuantity);

  const disptach = useDispatch();
  const toggleCartHandler = (event) => {
    event.preventDefault();
    disptach(toggleActions.toggle());
  };
  return (
    <button
      className={classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cQuantity}</span>
    </button>
  );
};

export default CartButton;
