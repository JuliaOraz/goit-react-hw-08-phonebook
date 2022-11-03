import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toastSuccess, toastWarn } from 'services/toast';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import {
  FormContacts,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactsForm/ContactsForm.styled';

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
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

    dispatch(addContact({ name, phone }));
    toastSuccess(name);
    setName('');
    setPhone('');
  };

  return (
    <FormContacts onSubmit={onSubmitForm}>
      <FormLabel htmlFor={nameId}>
        Name
        <FormInput
          type="tel"
          name="name"
          value={name}
          onChange={onChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={numberId}>
        Number
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={onChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContacts>
  );
};
