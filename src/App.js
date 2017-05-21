import React, { Component } from 'react';
import AutoComplete from './AutoComplete';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React AutoCompletion component</h1>
        <a href="https://github.com/SamuelRott/react-autocompletion">Documentation</a>
        <AutoComplete/>
      </div>
    );
  }
}

export default App;
