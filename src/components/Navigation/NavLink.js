import React from 'react';
import { Link } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';

function NavLink({ children, to }) {
  return (
    <Link color="secondary" underline="hover" component={RouteLink} to={to} sx={{ mr: 3, py: 1, fontSize: '2rem' }}>
      { children }
    </Link>
  );
}

export default NavLink;