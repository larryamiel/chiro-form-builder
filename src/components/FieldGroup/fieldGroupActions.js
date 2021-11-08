export const addFieldGroup = (state, payload) => {
  const fieldGroups = {...state.fieldGroups};
  
  const id = payload.id;
  const newFieldGroup = {
    name: payload.name,
    fields: []
  };

  // Assign
  fieldGroups[id] = newFieldGroup;

  return {...state, fieldGroups: fieldGroups};
}

export const removeFieldGroup = (state, payload) => {
  
}

export const setFieldGroupName = (state, payload) => {

}

export const generateFieldGroupId = (state) => {
  const fieldGroups = state.fieldGroups;
  const fieldGroupKeys = Object.keys(fieldGroups);
  
  // Initiate New Field Group ID
  let newFieldGroupId;

  // If There are fieldGroups in the state then Calculate for New Field Group by Incrementing
  if (fieldGroupKeys.length > 0) newFieldGroupId = +fieldGroupKeys[fieldGroupKeys.length - 1] + 1;
  // Else Default to 1
  else newFieldGroupId = 1;

  return newFieldGroupId;
}