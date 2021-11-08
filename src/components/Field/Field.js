import React, { useState } from 'react';

import { Button, Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Edit } from '@mui/icons-material';

import SelectField from './FieldTypes/SelectField';
import TextField from './FieldTypes/TextField';
import FieldEdit from './FieldEdit/FieldEdit';

function Field({ id, name, label, type, columns, options }) {
  const { control } = useForm();
  const [open, setOpen] = useState(false);

  const openEdit = () => setOpen(true);

  return (
    <Grid item xs={columns}>
      <Grid container>
        <Grid xs={12} sx={{ position: 'relative' }} item>
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              if (type === 'text') return <TextField field={field} label={label} />
              else if (type === 'select') return <SelectField options={options} field={field} label={label} />
            }}
          />

          <Button onClick={openEdit} sx={{ py: 2, minWidth: 0, position: 'absolute', right: '0.5rem' }}>
            <Edit />
          </Button>
        </Grid>
      </Grid>

      <FieldEdit open={open} setOpen={setOpen} id={id} />
    </Grid>
  );
}

export default Field;