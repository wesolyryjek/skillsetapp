import { combineReducers } from 'redux';
import personalFormField from './personalFormField';
import personalSkillsReducer from './personalSkillsReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  personalFormField,
  personalSkillsReducer,
  routing: routerReducer
});
