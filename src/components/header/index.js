import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div className="bg-light-blue tl pa3">
      <Link to="/" data-cy="header-title" className="no-underline black-80">
        <h2 className="dim">React docs!</h2>
      </Link>
    </div>
  );
};

export default Header;
