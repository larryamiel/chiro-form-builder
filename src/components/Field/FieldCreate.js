import React from 'react';

import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useStateMachine } from 'little-state-machine';

import { addField } from './fieldActions';

function FieldCreate({ group_id }) {
  const { actions } = useStateMachine({ addField })

  // Handle Click to Add Field
  const handleClick = (e) => actions.addField({ group_id: group_id });

  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      sx={{ mt: 2 }}
      startIcon={<Add sx={{ fontSize: '1rem' }} />}>Create a Field</Button>
  );
}

export default FieldCreate;