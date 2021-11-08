import React from 'react';

import FieldGroupName from './FieldGroupName';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useStateMachine } from 'little-state-machine';

import { generateFieldGroupId, addFieldGroup } from './fieldGroupActions';
import { Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

function FieldGroupCreate() {
  const { state, actions } = useStateMachine({ addFieldGroup });
  const { handleSubmit, control } = useForm();

  // Navigation
  const navigate = useNavigate();

  // OnSubmit
  const onSubmit = data => {
    // Add And Redirect
    actions.addFieldGroup({ id: data.group_id, name: data.group_name });

    // To
    navigate('/group/' + data.group_id);
  };

  return (
    <>
      <Typography variant="h5" mb={3}>Create a Field Group</Typography>

      <form>
        <FieldGroupName control={control} id={generateFieldGroupId(state)} />
        
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="outlined"
          sx={{ mt: 2 }}
          startIcon={<Add sx={{ fontSize: '1rem' }} />}>Create</Button>
      </form>
    </>
  );
}

export default FieldGroupCreate;