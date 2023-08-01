import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCardButton = (props) => {
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.buttonHeader} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 90);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfItemsInCart = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      className={btnClasses}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfItemsInCart} </span>
    </button>
  );
};

export default HeaderCardButton;
