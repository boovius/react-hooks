import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <StuffWithState />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function StuffWithState () {
  const [name, setName] = useState('Josh')
  return(
    <div>
      <p>This is some stuff with state, {name}</p>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}
export default App;
