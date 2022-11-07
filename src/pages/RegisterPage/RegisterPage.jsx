import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';

export default function RegisterPage() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Sign up
      </Typography>
      <RegisterForm />
    </>
  );
}
