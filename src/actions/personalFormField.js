export const UPDATE_PERSONAL_FROM_FIELD = 'PersonalForm/UPDATE_PERSONAL_FORM_FIELD';
export const UPDATE_PERSONAL_FORM_PHOTO = 'PersonalForm/UPDATE_PERSONAL_FORM_PHOTO';

export function updatePersonalFormField (payloads){
  return {
    type: UPDATE_PERSONAL_FROM_FIELD,
    payloads
  };
};
export function updatePersonalFormPhoto (payloads){
  return {
    type: UPDATE_PERSONAL_FORM_PHOTO,
    payloads
  };
};
