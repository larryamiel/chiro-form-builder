import React from 'react';

import { useParams } from 'react-router';
import { useStateMachine } from 'little-state-machine';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function FieldEditLabel({ id, control }) {
  const { group_id } = useParams();
  const { state } = useStateMachine();
  const field = state.fieldGroups[group_id].fields[id];

  const defaultValue = field.label;
  
  return (
    <Controller
      name={'field_' + id + '_label'}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        // Return Text Field
        return <TextField label="Field Label" variant="outlined" fullWidth {...field} />
      }}
    />
  );
}

export default FieldEditLabel;