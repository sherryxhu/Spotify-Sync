import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="http://localhost:8888/">
          <button>Login with Spotify</button>
        </a>
      </div>
    );
  }
}

export default App;
