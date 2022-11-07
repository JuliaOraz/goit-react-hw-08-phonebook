import { Typography } from '@mui/material';
import homeImg from 'img/home.jpg';

const HomePage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Welcome to PhoneBook
      </Typography>
      <Typography variant="subtitle1" component="h2">
        Saving phone contacts will be easier with us!
      </Typography>
      <img src={homeImg} alt="Home" />
    </>
  );
};

export default HomePage;
