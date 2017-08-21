import React, { Component } from 'react';
import Header from '../header/index.js';
import HappyHacking from '../happy-hacking/index.js';
//import IntroducingJSX from '../introducing-jsx/index.js';
import ComponentsAndProps from '../components-and-props/index.js';

import './styles.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ComponentsAndProps name="Mohammed" />
      </div>
    );
  }
}

export default HelloWorld;
