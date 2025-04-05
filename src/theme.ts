import { createTheme } from '@mui/material/styles';


const typography = {
  fontFamily: 'Poppins, sans-serif',
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b90404', // red
    },
    secondary: {
      main: '#1c1c1c', // dark text
    },
    background: {
      default: '#f5f5f5', // light background
      paper: '#ffffff',
    },
    text: {
      primary: '#1c1c1c', // dark text
      secondary: '#b90404', // red accents
    },
  },
  typography,
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b90404', // red
    },
    secondary: {
      main: '#f5f3f2', // white text
    },
    background: {
      default: '#1c1c1c', // dark background
      paper: '#2a2a2a',
    },
    text: {
      primary: '#f5f3f2', // white
      secondary: '#b90404',
    },
  },
  typography,
});
