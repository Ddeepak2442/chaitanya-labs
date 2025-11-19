import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
    //   main: '#FEE3EC',
    //   light: '#FFFFFF',
    //   dark: '#F9C5D5',
      main: '#F9C5D5',
      light: '#FEE3EC',
      dark: '#F279AB',
    },
    secondary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;