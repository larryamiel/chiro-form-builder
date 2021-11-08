import React from 'react';

function FieldGroupId(props) {
  const name = 'group_name';
  const default_value = 'Field Group ' + id;
  const rules = { required: true };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={default_value}
      rules={rules}
      render={({ field }) => {
        // Return Text Field
        return <TextField label="Field Group Name" variant="outlined" fullWidth {...field} />
      }}
    />
  );
}

export default FieldGroupId;