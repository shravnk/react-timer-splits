import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Timer from './Containers/Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;
