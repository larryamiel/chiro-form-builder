import React from 'react';
import Container from '@mui/material/Container'
import TopNav from '../components/Navigation/TopNav';

function BaseLayout({ children }) {
  return (
    <Container sx={{ p: 3 }} fixed>
      <TopNav />
      
      { children }
    </Container>
  );
}

export default BaseLayout;