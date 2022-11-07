import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin, isRefreshing } = useAuth();
  return !isLogin && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
