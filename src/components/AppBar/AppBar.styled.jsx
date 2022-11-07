import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const ActiveLink = styled(NavLink)({
  color: '#fff',
  fontWeight: 500,
  textTransform: 'uppercase',
  textDecoration: 'none',
  backgroundColor: 'rgba(25, 118, 210, 0.04)',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '4px 8px',
  borderRadius: '4px',
  marginRight: '8px',

  '&.active': {
    backgroundColor: '#cccccc5e',
  },
});
