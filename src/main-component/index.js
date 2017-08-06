import React, { Component } from 'react';
import Header from '../header/index.js';
import './styles.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <code>Happy hacking!</code>
        </p>
      </div>
    );
  }
}

export default HelloWorld;
