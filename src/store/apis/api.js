'use client'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.207.20.185:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
