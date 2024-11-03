import { Box, Toolbar, useMediaQuery } from '@mui/material';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import '../../App.css';

const AppContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#f1f1f4',
  zoom: '100%',
  minHeight: '100vh'
}));

export default function Home() {
  const location = useLocation();
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(!isSmallerScreen);

  useEffect(() => {
    setIsSidebarExpanded(!isSmallerScreen);
  }, [isSmallerScreen]);

  return (
    <div className="App" style={{ background: '#F1F5FC' }}>
      <Navbar />
      <AppContainer>
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
          isSmallerScreen={isSmallerScreen}
        />
        <ErrorBoundary location={location}>
          <Box
            component="main"
            sx={{ flexGrow: 1, paddingX: 2, paddingY: 1 }}
            style={{ marginLeft: isSidebarExpanded ? 250 : 60 }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </ErrorBoundary>
      </AppContainer>
    </div>
  );
}
