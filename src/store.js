import { createStore } from 'redux';
import personalFormReducer from './reducers/personalFormField';
import reducers from './reducers';


export default createStore(reducers);
