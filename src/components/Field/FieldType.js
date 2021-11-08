import React from 'react';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function FieldType(props) {
  return (
    <Controller
      name={'group_' + index + '_type'}
      control={control}
      render={({ field }) => {
        // if Field Value is undefined make it 'none'
        if (typeof field.value === 'undefined') field.value = 'none';

        // Return Text Field
        return (
          <FormControl fullWidth>
            <InputLabel>Field Type</InputLabel>
            <Select
              {...field}
              input={<OutlinedInput label="Field Type" />}
              value={field.value}
              onChange={field.onChange}
            >
              {
                fieldTypes.map(type => {
                  return (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        )
      }}
    />
  );
}

export default FieldType;