import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Avatar, Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Avatar sx={{ bgcolor: '#adc0d9b5', mr: 1 }}>
        {user.name.slice(0, 1).toUpperCase()}
      </Avatar>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{ mr: 3 }}
      >{`Welcome, ${user.name}`}</Typography>
      <Button
        variant="outlined"
        sx={{
          color: '#fff',
          borderColor: '#fff',
          '&:hover': {
            borderColor: '#fff',
            backgroundColor: '#cccccc5e',
          },
        }}
        size="small"
        onClick={onLogOut}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
