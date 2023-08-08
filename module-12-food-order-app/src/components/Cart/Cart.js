import React, { useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isChceckout, setIsChceckout] = useState(false);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const [isSumitting, setIsSumitting] = useState(false);
  const [didSumit, setDidSumit] = useState(false);
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsChceckout(true);
  };

  const submitOrdersHandler = async (userData) => {
    setIsSumitting(true);
    await fetch(
      'https://food-order-app-3bca2-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: ctx.items,
        }),
      }
    );
    setIsSumitting(false);
    setDidSumit(true);
    ctx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes['button--alt']}
        onClick={props.onHideCart}
      >
        Close
      </button>
      {hasItems && (
        <button
          className={classes.button}
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );
  const isSummittingModalContent = <p>Sending order data...</p>;
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChceckout && (
        <Checkout
          onConfirm={submitOrdersHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isChceckout && modalActions}
    </>
  );
  const didSummitModalContetnt = (
    <div>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={props.onHideCart}
        >
          Close
        </button>
      </div>
    </div>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSumitting && !didSumit && cartModalContent}
      {isSumitting && isSummittingModalContent}
      {!isSumitting && didSumit && didSummitModalContetnt}
    </Modal>
  );
};

export default Cart;
