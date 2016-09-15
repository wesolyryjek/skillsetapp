import { Record } from 'immutable';
import * as Actions from '../actions/personalFormField';

const initialState = {
  firstName: 'xcv',
  lastName: 'xcv',
  email: '',
};

export default function personalFormReducer(state = initialState, action) {
  switch(action.type) {
    case Actions.UPDATE_PERSONAL_FROM_FIELD:
      const { name, value } = action.payloads;
      return  Object.assign({}, state, {
        firstName: value
      })
    default:
      return state;
  }
}
