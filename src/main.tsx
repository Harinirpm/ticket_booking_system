import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoute from './App';
import lightTheme from './themes/lighttheme';
import darkTheme from './themes/darktheme';

const RootApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoute isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
