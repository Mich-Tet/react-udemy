import { toggleActions } from './toggle-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://module-20-ecb90-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'GET' }
      );
      if (!response.ok) {
        throw new Error('Could not fetch data.');
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [],
          totalQuantity: cartData?.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://module-20-ecb90-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      dispatch(
        toggleActions.showNotification({
          status: 'Success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
      await sendRequest();
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
