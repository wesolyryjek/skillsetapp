import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers';


const middleware = routerMiddleware(browserHistory);

export default createStore(reducers, applyMiddleware(middleware));
