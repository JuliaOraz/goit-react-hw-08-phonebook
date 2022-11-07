import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { Box, OutlinedInput, Typography } from '@mui/material';

export const ContactsFilter = () => {
  const filterContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        m: '40px auto 0',
        maxWidth: '35%',
        backgroundColor: '#f1f1f147',
        padding: '15px 20px',
        borderRadius: '4px',
      }}
    >
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
          fontWeight: 600,
          mr: 2,
          textAlign: 'left',
          lineHeight: 1.2,
          width: '50%',
        }}
      >
        Find contacts by name
      </Typography>

      <OutlinedInput
        type="text"
        name="filter"
        value={filterContacts}
        onChange={onChange}
        size="small"
      />
    </Box>
  );
};
