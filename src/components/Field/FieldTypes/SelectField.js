import React from 'react';

import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

function SelectField({ field, options, label }) {
  // if Field Value is undefined make it 1
  if (typeof field.value === 'undefined') field.value = 1;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        input={<OutlinedInput label={label} />}
        value={field.value}
      >
        {
          options ?
          options.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )
          }) : ''
        }
      </Select>
    </FormControl>
  )
}

export default SelectField;