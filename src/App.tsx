import React, { Component } from 'react';
import './App.css';

// react-router
import RootRouter from './router/RootRouter';

// Router
import { Provider } from 'react-redux';
import store from './store/Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

export default App;
