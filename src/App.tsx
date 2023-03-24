import React, { Component } from 'react';
import './App.css';

// react-router
import RootRouter from './router/RootRouter';

class App extends Component {
  render() {
    return (
      <>
        <RootRouter />
      </>
    );
  }
}

export default App;
