import React from "react";
import Header from "../header/index.js";
import Menu from '../menu/index.js';
import HappyHacking from "../happy-hacking/index.js";

class Home extends React.Component {
  render() { 
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <Menu />
          <div className="w-80-ns">
            <div>{this.props.children}</div>
            <div className="fixed bottom-0 right-0 ph3">
              <HappyHacking />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
