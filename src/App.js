import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Post />
        </header>
      </div>
    );
  }
}

export default App;
