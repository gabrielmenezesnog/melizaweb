import React, { Component } from 'react';
import './App.css';
import TelaDeAutenticacao from './pages/Autenticacao/TelaDeAutenticacao';

class App extends Component {
  render() {
    return (
      <>
        <div className="containerGeral">
          <TelaDeAutenticacao />
        </div>
      </>
    );
  }
}

export default App;
