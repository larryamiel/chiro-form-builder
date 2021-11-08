import React from 'react';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function FieldName() {
  return (
    <Controller
      name={'group_' + index + '_name'}
      control={control}
      defaultValue={'Field Name ' + (+index + 1)}
      rules={{ required: true }}
      render={({ field }) => {
        // Return Text Field
        return <TextField label="Field Name" variant="outlined" fullWidth {...field} />
      }}
    />
  );
}

export default FieldName;