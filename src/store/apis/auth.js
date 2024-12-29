import api from './api';
import endpoints from '../endpoints';

// Login API call
export const login = async (email, password) => {
  try {
    const response = await api.post(endpoints.authLogin, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Something went wrong';
  }
};