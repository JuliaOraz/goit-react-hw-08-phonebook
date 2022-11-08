import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { TextField, Box, Button } from '@mui/material';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: '40px auto',
          maxWidth: '35%',
          backgroundColor: '#f1f1f147',
          padding: '25px 30px',
          borderRadius: '4px',
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          inputProps={{
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}',
            title: 'Enter a valid value for the field',
          }}
          sx={{
            mb: 2,
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          inputProps={{
            pattern: '(?=.*\\d)(?=.*[a-z]).{7,}',
            title:
              'Must contain at least one number and at least 7 or more characters',
          }}
          sx={{
            mb: 2,
          }}
        />

        <Button variant="contained" type="submit">
          Log in
        </Button>
      </Box>
    </form>
  );
}
