import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toastSuccess, toastWarn } from 'services/toast';
import { TextField, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const searchDuplicate = name => {
    return contacts.find(item => item.name === name);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (searchDuplicate(name)) {
      return toastWarn(name);
    }

    dispatch(addContact({ name, number }));
    toastSuccess(name);
    setName('');
    setNumber('');
  };

  return (
    <form autoComplete="off" onSubmit={onSubmitForm}>
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
          htmlFor={nameId}
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={onChangeForm}
          inputProps={{ inputMode: 'numeric', pattern: '^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$', title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" }}
          required
          sx={{
            mb: 2,
          }}
        />

        <TextField
          htmlFor={numberId}
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          onChange={onChangeForm}        
          inputProps={{ inputMode: 'numeric', pattern: '^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}', title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" }}
          required
          sx={{
            mb: 2,
          }}
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
};
