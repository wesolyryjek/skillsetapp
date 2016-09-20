import { Record } from 'immutable';
import * as Actions from '../actions/personalFormField';

const initialState =  new (Record({
  firstName: '',
  lastName: '',
  email: '',
  photoSrc: 'http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png',
}));

export default function personalFormReducer(state = initialState, action) {
  switch(action.type) {
    case Actions.UPDATE_PERSONAL_FROM_FIELD:
      const { name, value } = action.payloads;
      return  state.set(name, value);
    case Actions.UPDATE_PERSONAL_FORM_PHOTO:
      return state.set('photoSrc', action.payloads);
    default:
      return state;
  }
}
