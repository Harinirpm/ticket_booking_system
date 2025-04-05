import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b90404',
    },
    secondary: {
      main: '#1c1c1c',
    },
    background: {
      default: '#f5f3f2',
    },
    text: {
      primary: '#1c1c1c',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export default lightTheme;
