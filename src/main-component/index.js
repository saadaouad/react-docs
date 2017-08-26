import React, { Component } from 'react';
import Header from '../header/index.js';
import HappyHacking from '../happy-hacking/index.js';
//import IntroducingJSX from '../introducing-jsx/index.js';
import ComponentsAndProps from '../components-and-props/index.js';
import Avatar from '../components-and-props/Avatar.js';
import avatarUrl from '../avatar.jpeg';

import './styles.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ComponentsAndProps name="Saad" />
        <Avatar avatarUrl={avatarUrl} name="Saad" />
        <HappyHacking />
      </div>
    );
  }
}

export default HelloWorld;
