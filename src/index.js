import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './themes';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <CssBaseline />
    <ToastContainer autoClose={3000} draggable pauseOnHover position={toast.POSITION.TOP_RIGHT} />

    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </>
);
