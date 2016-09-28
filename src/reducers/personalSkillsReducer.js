import { Record, List } from 'immutable';
import * as Actions from '../actions/personalSkillsAction';

const initialState =  new (Record({
  skills: new List(),
}));

export default function skillsReducer(state = initialState, action) {
  switch(action.type) {
    case Actions.ADD_SKILL:
      const { skillName, skillLevel } = action.payloads;
      return state.setIn('skills', action.payloads );
    default:
      return state;
  }
}
