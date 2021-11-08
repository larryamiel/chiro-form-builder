import React from 'react';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { useParams } from 'react-router';

import { editField } from '../fieldActions';
import FieldEditColumns from './FieldEditColumns';
import FieldEditLabel from './FieldEditLabel';

function FieldEdit({ id, open, setOpen }) {
  const { actions } = useStateMachine({ editField });
  const { handleSubmit, control } = useForm();

  const { group_id } = useParams();

  const handleClose = () => setOpen(false);
  const handleSave = (data) => {
    // Edit Field
    actions.editField({ data: data, group_id: group_id, id: id });

    // Close the Dialog
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Edit Field
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Customize the field to your liking. There are a total of 12 columns in a line. If you want to fit 3 equally sized fields on the same line.
          Then go and do 3 fields with "Column" set to 4. (12/3).
        </DialogContentText>

        <Box mt={3}>
          <FieldEditLabel id={id} control={control} />
        </Box>
        
        <Box mt={3}>
          <FieldEditColumns id={id} control={control} />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(handleSave)} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FieldEdit;