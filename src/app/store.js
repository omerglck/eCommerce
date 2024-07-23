import {configureStore} from '@reduxjs/toolkit';
import productReducer from './slices/products';
import cartReducer from './slices/cart';
import favoritesReducer from './slices/favorites';
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
