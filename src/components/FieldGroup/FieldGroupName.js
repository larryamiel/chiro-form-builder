import React from 'react';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function FieldGroupName({ id, control }) {
  const rules = { required: true };

  return (
    <>
      <Controller
        name={'group_id'}
        control={control}
        defaultValue={id}
        rules={rules}
        render={({ field }) => {
          // Return Text Field
          return <TextField {...field} sx={{ display: 'none' }} />
        }}
      />

      <Controller
        name={'group_name'}
        control={control}
        defaultValue={'Field Group ' + id}
        rules={rules}
        render={({ field }) => {
          // Return Text Field
          return <TextField label="Field Group Name" variant="outlined" fullWidth {...field} />
        }}
      />
    </>
  );
}

export default FieldGroupName;