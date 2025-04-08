import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoute from './App';
import lightTheme from './themes/lighttheme';
import darkTheme from './themes/darktheme';
import { store } from "./redux/store";
import { Provider } from "react-redux";

const RootApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
<Provider store={store}>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoute isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
