// src/app/actions/cartActions.js
import {createAsyncThunk} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadCartFromStorage = createAsyncThunk(
  'cart/loadCartFromStorage',
  async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      if (cart) {
        return JSON.parse(cart);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
      return [];
    }
  },
);
