import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory } from 'react-router';

import AddProfile from "./containers/AddProfile";
import NotFound from "./containers/NotFound";
import AddSkills from "./containers/AddSkills";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AddProfile} />
          <Route path="/404" component={NotFound} />
          <Route path="/addskills" component={AddSkills} />
        </Router>
      </Provider>
    );
  }
}

export default App;
