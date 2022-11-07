import { Typography } from '@mui/material';
import noPageImg from 'img/no_page.png';

const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Oops!
      </Typography>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
        Page not found
      </Typography>
      <img src={noPageImg} alt="No Page" />
    </>
  );
};

export default NotFoundPage;
