import { ActiveLink } from '../AppBar.styled';

const AuthNav = () => {
  return (
    <>
      <ActiveLink to="/register">Sign up</ActiveLink>
      <ActiveLink to="/login">Login</ActiveLink>
    </>
  );
};

export default AuthNav;
