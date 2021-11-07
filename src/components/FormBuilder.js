import { Box, Grid, TextField, Select, Button, FormControl, InputLabel, MenuItem, OutlinedInput } from '@mui/material';
import React from 'react';

import { useForm, Controller } from 'react-hook-form';

const fieldTypes = [
  { value: 'none', label: 'None' },
  { value: 'text', label: 'Text' },
  { value: 'textarea', label: 'Textarea' },
  { value: 'select', label: 'Select' },
  { value: 'checkbox', label: 'Checkbox' },
];

function FormBuilder({ form, setForm }) {
  // Adding Group
  const addGroup = () => setForm(form => [...form, {}]);

  // Adding Field
  const addField = (index) => {
    // Set Form
    setForm(form => {
      // Create Fields Property if it is empty
      if (typeof form[index].fields === 'undefined') form[index].fields = [];

      // Add Field
      form[index].fields = [...form[index].fields, {}];

      // Return Form
      return [...form];
    });
  }

  return (
    <Box p={2}>
      {
        // Loop Through the Form for Groups
        form?.map((group, index) => {
          if (group === null || group === false) return <></>;
          
          return (
            <Box key={index} mb={2} p={2} sx={{ p: 2, border: '1px dashed grey' }}>
              <FormGroupConfigurator index={index} setForm={setForm} />
              
              <Box p={2} sx={{ p: 2, border: '1px dashed grey' }}>
                {
                  // Loop Through the Fields for the Group
                  group.fields?.map((field, index, group, setForm) => {
                    return <FormFieldConfigurator key={index} index={index} />
                  })
                }

                <Button variant="outlined" onClick={e => addField(index)}>
                  Add Field
                </Button>
              </Box>
            </Box>
          )
        })
      }

      <Button variant="outlined" onClick={e => addGroup()}>
        Add Group
      </Button>
    </Box>
  );
}

function FormGroupConfigurator({ index, setForm }) {
  const { handleSubmit, control } = useForm();

  // OnSubmit
  const onSubmit = data => console.log(data);

  return (
    <Box mb={2}>
      <form onChange={handleSubmit(onSubmit)}>
        <Controller
          name={'group_' + index}
          control={control}
          defaultValue={'Field Group ' + (+index + 1)}
          rules={{ required: true }}
          render={({ field }) => {
            // Return Text Field
            return <TextField label="Field Group Name" variant="outlined" fullWidth {...field} />
          }}
        />
      </form>
    </Box>
  )
}

function FormFieldConfigurator({ index, group, setForm }) {
  const { handleSubmit, control, getValues } = useForm({ mode: 'onChange' });

  // OnSubmit
  const onSubmit = data => console.log(data);

  return (
    <Box mb={2} p={2} sx={{ backgroundColor: '#f5f5f5' }}>
      <form onChange={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* Field Name */}
            <Controller
              name={'group_' + index + '_name'}
              control={control}
              defaultValue={'Field Name ' + (+index + 1)}
              rules={{ required: true }}
              render={({ field }) => {
                // Return Text Field
                return <TextField label="Field Name" variant="outlined" fullWidth {...field} />
              }}
            />
          </Grid>

          <Grid item xs={2}>
            {/* Field Type */}
            <Controller
              name={'group_' + index + '_type'}
              control={control}
              render={({ field }) => {
                // if Field Value is undefined make it 'none'
                if (typeof field.value === 'undefined') field.value = 'none';

                // Return Text Field
                return (
                  <FormControl fullWidth>
                    <InputLabel>Field Type</InputLabel>
                    <Select
                      {...field}
                      input={<OutlinedInput label="Field Type" />}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {
                        fieldTypes.map(type => {
                          return (
                            <MenuItem key={type.value} value={type.value}>
                              {type.label}
                            </MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                )
              }}
            />
          </Grid>

          {/* Field Columns */}
          <Grid item xs={2}>
            {/* Field Type */}
            <Controller
              name={'group_' + index + '_columns'}
              control={control}
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
          </Grid>

          {/* Field Columns */}
          <Grid item xs={4}>
            {/* Field Type */}
            <Controller
              name={'group_' + index + '_options'}
              control={control}
              defaultValue={''}
              render={({ field }) => {
                const values = getValues();
                const type = values['group_' + index + '_type'];

                // Return Text Field
                return <TextField label="Field Options" variant="outlined" fullWidth {...field} disabled={type === 'select' ? true : false} />
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FormBuilder;