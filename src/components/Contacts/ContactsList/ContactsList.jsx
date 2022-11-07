import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import {
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contacts-selectors';
import { getFilterContacts } from 'redux/filter/filter-selectors';
import { ContactsItem } from 'components/Contacts/ContactsList/ContactsItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <p>...loading</p>}
      {getVisibleContacts.length > 0 && !isLoading && !error && (
        <>
          <Box
            component="ul"
            sx={{
              m: '20px auto 40px',
              maxWidth: '38%',
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
            }}
          >
            <ContactsItem items={getVisibleContacts} />
          </Box>
        </>
      )}
      {getVisibleContacts.length === 0 && !error && !isLoading && (
        <p>Not found &#x1f60c;</p>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
