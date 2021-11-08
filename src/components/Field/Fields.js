import React from 'react';

import Field from './Field';

import { Grid } from '@mui/material';

function Fields({ fields }) {
  return (
    <Grid spacing={2} container>
      {
        fields.map((field, index) => {
          return <Field key={index} id={index} name={field.name} label={field.label} type={field.type} columns={field.columns} options={field.options} />
        })
      }
    </Grid>
  );
}

export default Fields;