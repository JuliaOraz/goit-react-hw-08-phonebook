import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from '@mui/material';

import { Suspense } from 'react';

import AppBar from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Container maxWidth="lg" sx={{ pt: 14, textAlign: 'center' }}>
          <Outlet />
        </Container>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
