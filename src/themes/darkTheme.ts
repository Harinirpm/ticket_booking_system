import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b90404',
    },
    secondary: {
      main: '#f5f3f2',
    },
    background: {
      default: '#1c1c1c',
    },
    text: {
      primary: '#f5f3f2',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  
});

export default darkTheme;
