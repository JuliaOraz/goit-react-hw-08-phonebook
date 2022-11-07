import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import Layout from './Layout';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LinearProgress />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
