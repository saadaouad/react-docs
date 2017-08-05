import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, world!</h2>
        </div>
        <p className="App-intro">
          <code>Happy hacking!</code>
        </p>
      </div>
    );
  }
}

export default HelloWorld;
