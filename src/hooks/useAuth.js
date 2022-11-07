import { useSelector } from 'react-redux';
import {
  selectIsLogin,
  selectUser,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLogin,
    isRefreshing,
    user,
  };
};
