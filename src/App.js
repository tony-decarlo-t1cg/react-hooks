import React, { Component } from 'react';
import './App.css';
import Hooks from './Hooks';
import NoHooks from './NoHooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hooks</h1>
        <Hooks/>
        <hr/>
        <h1>No Hooks</h1>
        <NoHooks/>
      </div>
    );
  }
}

export default App;
