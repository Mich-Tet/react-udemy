import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { isVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer;
