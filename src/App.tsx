import React from 'react';
import { useRoutes } from 'react-router-dom';
import Routes from './routes/Routes';

interface AppRouteProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppRoute: React.FC<AppRouteProps> = ({ isDarkMode, toggleDarkMode }) => {
  const element = useRoutes(Routes(isDarkMode, toggleDarkMode));
  return element;
};

export default AppRoute;
