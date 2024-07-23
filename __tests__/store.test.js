import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../src/app/slices/products';
import cartReducer from '../src/app/slices/cart';
import {store} from '../src/app/store';

describe('Redux Store', () => {
  it('should have the correct reducers', () => {
    const testStore = configureStore({
      reducer: {
        products: productReducer,
        cart: cartReducer,
      },
    });

    expect(store.getState().products).toEqual(testStore.getState().products);
    expect(store.getState().cart).toEqual(testStore.getState().cart);
  });

  it('should initialize with the correct default state', () => {
    const initialState = store.getState();

    expect(initialState).toHaveProperty('products');
    expect(initialState).toHaveProperty('cart');
  });
});
