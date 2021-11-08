import React from 'react';

import { Box, Link, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';

function FieldGroupList() {
  const { state } = useStateMachine();

  return (
    <>
      {
      Object.keys(state.fieldGroups).length > 0 ?
        Object.keys(state.fieldGroups).map(key => {
          // Initialize Group
          const group = state.fieldGroups[key];

          return (
            <Box key={key} sx={{ px: 2, py: '2px' }}>
              <Link component={RouteLink} color="secondary" to={`/group/${key}`} underline="hover" sx={{ fontSize: '2rem' }}>{ key + ', ' +  group.name }</Link>
            </Box>
          );
        })
        : 
        <Typography color="secondary">No Field Groups Found. Create one now.</Typography>
      }
    </>
  );
}

export default FieldGroupList;