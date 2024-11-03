import { UserContextProvider } from './contexts/userContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes.js';
import { AppContextProvider } from './contexts/appContext.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
