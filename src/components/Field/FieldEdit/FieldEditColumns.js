import React from 'react';

import { useParams } from 'react-router';
import { useStateMachine } from 'little-state-machine';

import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

function FieldEditColumns({ id, control }) {
  const { group_id } = useParams();
  const { state } = useStateMachine();
  const field = state.fieldGroups[group_id].fields[id];

  const defaultValue = field.columns;
  
  return (
    <Controller
      name={'field_' + id + '_columns'}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        // if Field Value is undefined make it 1
        if (typeof field.value === 'undefined') field.value = 1;

        // Return Text Field
        return (
          <FormControl fullWidth>
            <InputLabel>Field Columns</InputLabel>
            <Select
              {...field}
              input={<OutlinedInput label="Field Columns" />}
              value={field.value}
            >
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(type => {
                  return (
                    <MenuItem key={type} value={type}>
                      {type}
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

export default FieldEditColumns;