export const addField = (state, payload) => {
  const fieldGroup = state.fieldGroups[payload.group_id];
  const fieldDefault = {
    name: 'field_' + fieldGroup.fields.length,
    label: 'Field ' +  fieldGroup.fields.length,
    type: 'text',
    columns: 2
  };
  
  // Push FieldGroup
  fieldGroup.fields.push(fieldDefault);

  return {...state};
}

export const editField = (state, payload) => {
  const fieldGroup = state.fieldGroups[payload.group_id];
  const field = fieldGroup.fields[payload.id];
  const data = payload.data;

  // Get Data from Payload
  const label = data['field_' + payload.id + '_label'];
  const columns = data['field_' + payload.id + '_columns'];
  
  // Assign Field Values
  field.label = label;
  field.columns = columns;

  // Return
  return {...state};
}