import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'

import AddProfile from "./containers/AddProfile";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddProfile />
      </Provider>
    );
  }
}

export default App;
