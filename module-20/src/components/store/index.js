import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import toggleReducer from './toggle-slice';
const store = configureStore({
  reducer: { cart: cartReducer, toggle: toggleReducer },
});
export default store;
