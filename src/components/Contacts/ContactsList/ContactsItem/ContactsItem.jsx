import PropTypes from 'prop-types';
import { toastInfo } from 'services/toast';
import { Box, Button } from '@mui/material';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ items }) => {
  const dispatch = useDispatch();

  const onRemoveContacts = (id, name) => {
    dispatch(deleteContact(id));
    toastInfo(name);
  };

  return (
    <>
      {items.map(({ id, name, number }) => {
        return (
          <Box
            key={id}
            component="li"
            sx={{
              borderRadius: '4px',
              boxShadow: ' 0 1px 4px rgb(0 0 0 / 10%)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 20px',
              mt: 2,
            }}
          >
            {name}: {number}
            <Button
              variant="outlined"
              size="small"
              onClick={() => onRemoveContacts(id, name)}
            >
              Delete
            </Button>
          </Box>
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
      number: PropTypes.string.isRequired,
    })
  ),
};
