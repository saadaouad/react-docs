import React from "react";
import Header from "../header/index.js";
import HappyHacking from "../happy-hacking/index.js";
import UserInfo from "../components-and-props/UserInfo";
import avatarUrl from "../../avatar.jpeg";
import "./styles.css";

class MainComponent extends React.Component {
  render() {
    const name = "Saad";
    return (
      <div className="App">
        <Header />
        <div className="flex">
        <div className="ph6-ns bg-light-gray vh-100-ns pv4">Menu</div>
        <div className="center">
            <UserInfo name={name} avatarUrl={avatarUrl} />
          <div>{this.props.children}</div>
            <HappyHacking />
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
