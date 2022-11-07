import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { TextField, Box, Button } from '@mui/material';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
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
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          sx={{
            mb: 2,
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
          title="Enter a valid value for the field"
          required
          autoComplete="off"
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
          pattern="(?=.*\d)(?=.*[a-z]).{7,}"
          title="Must contain at least one number and at least 7 or more characters"
          required
          autoComplete="off"
          sx={{
            mb: 2,
          }}
        />
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Box>
    </form>
  );
}
