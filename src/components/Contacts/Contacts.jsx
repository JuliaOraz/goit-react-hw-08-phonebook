import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactsFilter } from 'components/Contacts/ContactsFilter';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList';

import { Typography, CircularProgress } from '@mui/material';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsForm />
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
        Contacts
      </Typography>

      {contacts.length > 0 && !error && !loading && (
        <>
          <ContactsFilter />
          <ContactsList />
        </>
      )}
      {loading && <CircularProgress sx={{ mt: 4 }} />}
      {contacts.length === 0 && !loading && (
        <p>There are no contacts &#x1f609;</p>
      )}
      {error && <p>Oops, something went wrong</p>}
    </>
  );
};

export default Contacts;
