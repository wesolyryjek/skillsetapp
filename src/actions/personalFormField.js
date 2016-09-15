export const UPDATE_PERSONAL_FROM_FIELD = 'PersonalForm/UPDATE_PERSONAL_FORM_FIELD';

export function updatePersonalFormField (payloads){
  return {
    type: UPDATE_PERSONAL_FROM_FIELD,
    payloads
  };
}
