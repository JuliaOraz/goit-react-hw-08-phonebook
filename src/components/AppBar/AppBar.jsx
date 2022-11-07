import UserMenu from 'components/AppBar/UserMenu/UserMenu';
import Navigation from 'components/AppBar/Navigation/Navigation';
import AuthNav from 'components/AppBar/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Container, Toolbar, Box } from '@mui/material';
import { default as AppBarMat } from '@mui/material/AppBar';

const AppBar = () => {
  const { isLogin } = useAuth();
  return (
    <AppBarMat>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 1,
              flexGrow: 1,
            }}
          >
            <Navigation />
          </Box>
          <Box
            sx={{
              ml: 1,
              flexGrow: 1,
              textAlign: 'right',
            }}
          >
            {isLogin ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBarMat>
  );
};

export default AppBar;
