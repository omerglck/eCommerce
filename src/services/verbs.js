import {api} from './api';

export const fetchProducts = async URL => {
  const response = await api.get(`/${URL}`);
  return response.data;
};
