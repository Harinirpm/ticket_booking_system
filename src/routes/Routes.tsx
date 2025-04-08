import { lazy, Suspense } from 'react';
import router from '../utils/RouterObj';
import Layout from '../component/Layout';
import ProtectedRoute from "../component/ProtectedRoute";

const Home = lazy(() => import('../pages/Home'));
const AdminPage = lazy(() => import('../pages/Admin'));
const LoginForm = lazy(() => import('../authentication/LoginForm'));

const Routes = (isDarkMode: boolean, toggleDarkMode: () => void) => [
  {
    path: router.home,
    element: (
      <ProtectedRoute allowedRoles={['user', 'admin']}>
      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: router.admin,
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPage />
          </Suspense>
        </Layout>
      </ProtectedRoute>
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
