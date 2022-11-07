import Contacts from 'components/Contacts/Contacts';
import { Typography } from '@mui/material';

const ContactsPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Phonebook
      </Typography>
      <Contacts />
    </>
  );
};

export default ContactsPage;
