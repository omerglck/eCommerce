import {createSlice} from '@reduxjs/toolkit';
import {removeFromStorage, saveToStorage} from '../../utils/storageHelper';
import {loadCartFromStorage} from '../actions/cartActions';

const initialState = {
  carts: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.carts.find(
        cart => cart.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.carts.push({...action.payload, quantity: 1});
      }
      state.totalItems += 1;
      saveToStorage('cart', state.carts);
    },
    removeItem: (state, action) => {
      const existingItem = state.carts.find(
        cart => cart.id === action.payload.id,
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalItems -= 1;
        } else {
          state.carts = state.carts.filter(
            cart => cart.id !== action.payload.id,
          );
          state.totalItems -= 1;
        }
      }
      saveToStorage('cart', state.carts);
    },
    clearCart: state => {
      state.carts = [];
      state.totalItems = 0;
      removeFromStorage('cart');
    },
    setCart: (state, action) => {
      state.carts = action.payload;
      state.totalItems = action.payload.reduce(
        (total, item) => total + item.quantity,
        0,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(loadCartFromStorage.fulfilled, (state, action) => {
      state.carts = action.payload;
      state.totalItems = action.payload.reduce(
        (total, item) => total + item.quantity,
        0,
      );
    });
  },
});

export const {addItem, removeItem, clearCart, setCart} = cartSlice.actions;

export default cartSlice.reducer;
