import PropTypes from 'prop-types';
import { toastInfo } from 'services/toast';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

import { ItemContact, ItemButton } from './ContactsItem.styled';

export const ContactsItem = ({ items }) => {
  const dispatch = useDispatch();

  const onRemoveContacts = (id, name) => {
    dispatch(deleteContact(id));
    toastInfo(name);
  };

  return (
    <>
      {items.map(({ id, name, phone }) => {
        return (
          <ItemContact key={id}>
            {name}: {phone}
            <ItemButton onClick={() => onRemoveContacts(id, name)}>
              Delete
            </ItemButton>
          </ItemContact>
        );
      })}
    </>
  );
};

ContactsItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
