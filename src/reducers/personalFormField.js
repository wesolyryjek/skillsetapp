import { Record } from 'immutable';
import * as Actions from '../actions/personalFormField';

const initialState =  new (Record({
  firstName: '',
  lastName: '',
  email: '',
}));

export default function personalFormReducer(state = initialState, action) {
  switch(action.type) {
    case Actions.UPDATE_PERSONAL_FROM_FIELD:
      const { name, value } = action.payloads;
      return  state.set(name, value);
    default:
      return state;
  }
}
