import LoginForm from 'components/LoginForm/LoginForm';
import { Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Log in
      </Typography>
      <LoginForm />
    </div>
  );
}
