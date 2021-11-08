import React from 'react';

import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ mt: 15 }}>
      <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>Welcome.</Typography>
      <Typography variant="h3" sx={{ textTransform: 'uppercase', fontSize: '2.5rem' }}>
        This is the Chiropractic Form Builder.
      </Typography>
    </Box>
  );
}

export default HomePage;