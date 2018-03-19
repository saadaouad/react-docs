import React from 'react';
import Header from '../header/index.js';
import HappyHacking from '../happy-hacking/index.js';
//import IntroducingJSX from '../introducing-jsx/index.js';
import Clock from '../state-and-lifecycle/index.js';
import UserInfo from '../components-and-props/UserInfo';
//import HandlingEvents from '../handling-events/index.js';
import LoginControl from '../conditional-rendering/index.js';
import avatarUrl from '../avatar.jpeg';
import './styles.css';

class HelloWorld extends React.Component {
  render() {
    const name = "Saad";
    return (
      <div className="App">
        <Header />
        <UserInfo name={name} avatarUrl={avatarUrl} />
        <Clock />
        <LoginControl />
        <HappyHacking />
      </div>
    );
  }
}

export default HelloWorld;
