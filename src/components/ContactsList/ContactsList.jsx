import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { getIsLoading, getError } from 'redux/selectors';
import { ContactsItem } from 'components/ContactsList/ContactsItem';

import { ListContacts } from 'components/ContactsList/ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      {isLoading && <p>...loading</p>}
      {contacts.length > 0 && !isLoading && !error && (
        <>
          <ListContacts>
            <ContactsItem items={contacts} />
          </ListContacts>
        </>
      )}
      {contacts.length === 0 && !error && !isLoading && (
        <p>Not found &#x1f60c;</p>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
