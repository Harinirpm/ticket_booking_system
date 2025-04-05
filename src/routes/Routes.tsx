import { lazy, Suspense } from 'react';
import router from '../utils/RouterObj';
import Layout from '../component/Layout';

const Home = lazy(() => import('../pages/Home'));
const LoginForm = lazy(() => import('../authentication/LoginForm'));

const Routes = (isDarkMode: boolean, toggleDarkMode: () => void) => [
  {
    path: router.home,
    element: (
      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: router.login,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    ),
  },
];

export default Routes;
