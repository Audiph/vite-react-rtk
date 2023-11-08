import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../features/cart/cartSlice';
import modelReducer from '../../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modelReducer,
  },
});
