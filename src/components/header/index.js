import React, { Component } from "react";
import { Link } from "@reach/router";
import logo from "../../logo.svg";
import "./styles.css";

const HomeRoute = () => (
  <Link to="/">
    <img src={logo} className="App-logo" alt="logo" />
  </Link>
);

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header pv3">
          <HomeRoute />
          <h2>Salam alaykum!</h2>
        </div>
      </div>
    );
  }
}

export default Header;
