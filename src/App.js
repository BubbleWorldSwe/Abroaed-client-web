import { UserContextProvider } from './contexts/userContext';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './contexts/appContext.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRoutes from '../website/src/routes/index.jsx';

const App = () => {
  return (
    <UserContextProvider>
      <AppContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppContextProvider>
    </UserContextProvider>
  );
};

export default App;
