import React from 'react';
import { Box } from '@mui/material';
import NavLink from './NavLink';

function TopNav() {
  return (
    <Box sx={{ py: 2 }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/group">Field Groups</NavLink>
    </Box>
  );
}

export default TopNav;