import { useAuth } from 'hooks/useAuth';
import { ActiveLink } from '../AppBar.styled';

const Navigation = () => {
  const { isLogin } = useAuth();
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>

      {isLogin && <ActiveLink to="/contacts">Contacts</ActiveLink>}
    </nav>
  );
};

export default Navigation;
