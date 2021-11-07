import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import FormBuilder from './components/FormBuilder';
import FormPreview from './components/FormPreview';
import { Button } from '@mui/material';

function FormComponent ({ form, setForm, mode }) {
  if (mode === 'builder') return <FormBuilder setForm={setForm} form={form} />
  else if (mode === 'preview') return <FormPreview form={mode} />
  else return;
}

function App({ ...props }) {
  const [form, setForm] = useState([{}]);
  const [mode, setMode] = useState('builder');

  const handleMode = (mode) => setMode(mode);

  return (
    <Container fixed>
      <Grid>
        <Button onClick={e => handleMode('builder')}>
          Form Builder
        </Button>

        <Button onClick={e => handleMode('preview')}>
          Form Preview
        </Button>
      </Grid>

      <Box mt={5}>
        <FormComponent form={form} setForm={setForm} mode={mode} />
      </Box>
    </Container>
  );
}

export default App;