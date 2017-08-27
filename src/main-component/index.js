import React, { Component } from 'react';
import Header from '../header/index.js';
import HappyHacking from '../happy-hacking/index.js';
//import IntroducingJSX from '../introducing-jsx/index.js';
//import ComponentsAndProps from '../components-and-props/index.js';
import Avatar from '../components-and-props/Avatar.js';
import avatarUrl from '../avatar.jpeg';

import './styles.css';

class HelloWorld extends Component {
  render() {
    const name = "Saad"
    return (
      <div className="App">
        <Header />
        <h2>This is, {name}!</h2>
        <Avatar avatarUrl={avatarUrl} name={name} />
        <HappyHacking />
      </div>
    );
  }
}

export default HelloWorld;
