import { Record, List } from 'immutable';
import * as Actions from '../actions/personalSkillsAction';

const initialState =  new (Record({
  skills: new List(),
}));

export default function skillsReducer(state = initialState, action) {
  switch(action.type) {
    case Actions.ADD_SKILL:
      {const newValue = state.get('skills').push(action.payloads);
      return state.set('skills', newValue );}
    case Actions.CHANGE_SKILL_LEVEL:
      {const newValue = state.get('skills').get(action.index);
      const a = Object.assign({}, newValue, {level: action.level+1});
      const newSkills = state.get('skills').set(action.index, a);
      return state.set('skills', newSkills);}
    case Actions.DELETE_SKILL:
      const newValue = state.get('skills').delete(action.index);
      return state.set('skills', newValue);
    default:
      return state;
  }
}
