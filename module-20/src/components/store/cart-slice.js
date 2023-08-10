import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  isVisible: false,
  title: 'Test',
  quantity: 0,
  totalPrice: 0,
  price: 6,
  description: 'This is a first product - amazing!',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    increment(state) {
      state.totalPrice += state.price;
      state.quantity++;
    },
    decrement(state) {
      if (state.totalPrice > 0) {
        state.totalPrice -= state.price;
        state.quantity--;
      }
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
