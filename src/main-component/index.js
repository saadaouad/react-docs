import React from 'react';
import Header from '../header/index.js';
import HappyHacking from '../happy-hacking/index.js';
//import IntroducingJSX from '../introducing-jsx/index.js';
import UserInfo from '../components-and-props/UserInfo';
import avatarUrl from '../avatar.jpeg';
import './styles.css';

class HelloWorld extends React.Component {
  render() {
    const name = "Saad";
    return (
      <div className="App">
        <Header />
        <UserInfo name={name} avatarUrl={avatarUrl} />
        <HappyHacking />
      </div>
    );
  }
}

export default HelloWorld;
