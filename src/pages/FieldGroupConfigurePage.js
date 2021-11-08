import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { useStateMachine } from 'little-state-machine';
import { useNavigate, useParams } from 'react-router';

import FieldCreate from '../components/Field/FieldCreate';
import Fields from '../components/Field/Fields';

function FieldGroupConfigurePage() {
  const navigate = useNavigate();
  const { state } = useStateMachine();
  const { group_id } = useParams();

  const group = state.fieldGroups[group_id];

  useEffect(() => {
    // If no FieldGroup then Redirect to Field Groups
    if (group == null || typeof group == 'undefined') { navigate('/group'); return; }
  }, [group, navigate])

  return (
    <Box sx={{ mt: 15 }}>
      <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>{ group?.name }.</Typography>
      <Typography variant="h3" sx={{ textTransform: 'uppercase', fontSize: '2.5rem' }}>
        Configure the fields that go into this Field Group.
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Fields fields={group.fields} />
      </Box>

      <Box sx={{ mt: 5 }}>
        <FieldCreate group_id={group_id} />
      </Box>
    </Box>
  );
}

export default FieldGroupConfigurePage;