import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProducts} from '../../services/verbs';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const products = await fetchProducts('products');
    return products;
  },
);
