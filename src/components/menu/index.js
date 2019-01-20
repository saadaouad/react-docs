import React from "react";
import { Link } from "@reach/router";

class Menu extends React.Component {
  render() {
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: "b underline black" } : null;
    };
    return (
      <div className="w-20-ns tc bg-light-gray vh-100-ns pv4">
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/introducing-jsx"
            getProps={isActive}
          >
            Introducing JSX
          </Link>
        </div>
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/components-and-props"
            getProps={isActive}
          >
            Components and Props
          </Link>
        </div>
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/state-and-lifecycle"
            getProps={isActive}
          >
            State and Lifecycle
          </Link>
        </div>
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/handling-events"
            getProps={isActive}
          >
            Handling Events
          </Link>
        </div>
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/conditional-rendering"
            getProps={isActive}
          >
            Conditional Rendering
          </Link>
        </div>
        <div className="pv2">
          <Link
            className="dim black no-underline"
            to="/lists-and-keys"
            getProps={isActive}
          >
            Lists and Keys
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
