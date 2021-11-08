import React from 'react';

import FieldGroupList from '../components/FieldGroup/FieldGroupList';
import FieldGroupCreate from '../components/FieldGroup/FieldGroupCreate';

import { Box, Typography } from '@mui/material';

function FieldGroupPage() {
  return (
    <Box sx={{ mt: 15 }}>
      <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>Field Groups.</Typography>
      <Typography variant="h3" sx={{ textTransform: 'uppercase', fontSize: '2.5rem' }}>
        Here is a list of all field groups you have.
      </Typography>

      <Box sx={{ mt: 5 }}>
        <FieldGroupList />
      </Box>

      <Box sx={{ mt: 15 }}>
        <FieldGroupCreate />
      </Box>
    </Box>
  );
}

export default FieldGroupPage;