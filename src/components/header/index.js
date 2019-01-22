import React, { Component } from "react";
import { Link } from "@reach/router";

class Header extends Component {
  render() {
    return (
      <div className="bg-light-blue tl pa3">
        <Link to="/" className="no-underline black-80">
          <h2 className="dim">React docs!</h2>
        </Link>
      </div>
    );
  }
}

export default Header;
