import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#28282B'
    },
    error: {
      main: '#bc5d5d',
      contrastText: '#fff'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: '#263d52'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#263d52'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: '#263d52',
          borderColor: '#263d52',
          backgroundColor: '#ffffff42',
          '&:hover': {
            backgroundColor: '#eae9f1'
          }
        },
        contained: {
          color: '#fff',
          borderColor: '#263d52',
          backgroundColor: '#414447',
          '&:hover': {
            backgroundColor: '#28282B'
          }
        }
      }
    }
  },
  typography: {
    fontFamily: 'Roboto,RobotoDraft,Helvetica,Arial,sans-serif'
  }
});
