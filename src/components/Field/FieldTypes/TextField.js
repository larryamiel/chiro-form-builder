import React from 'react';

import { TextField as MUITextField } from '@mui/material';

function TextField({ field, label }) {
  return (
    <MUITextField label={label} variant="outlined" fullWidth {...field} />
  );
}

export default TextField;