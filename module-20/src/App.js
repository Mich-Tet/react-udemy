import Notification from './components/UI/Notification';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { sendCartData } from './components/store/cart-actions';
import { fetchCartData } from './components/store/cart-actions';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const toggle = useSelector((state) => state.toggle.isVisible);
  const notification = useSelector((state) => state.toggle.notification);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {toggle ? <Cart /> : <></>}
      <Products />
    </Layout>
  );
}

export default App;
