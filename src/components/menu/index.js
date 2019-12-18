import React from "react";
import { Link } from "@reach/router";

const Menu = props => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "b underline black" } : null;
  };
  return (
    <div className="w-20-ns tc bg-light-gray vh-100-ns pv4">
      <div className="pv2">
        <Link
          id="introducing-jsx"
          data-cy="introducing-jsx"
          className="dim black no-underline"
          to="/introducing-jsx"
          getProps={isActive}
        >
          Introducing JSX
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="components-and-props"
          data-cy="components-and-props"
          className="dim black no-underline"
          to="/components-and-props"
          getProps={isActive}
        >
          Components and Props
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="state-and-lifecycle"
          data-cy="state-and-lifecycle"
          className="dim black no-underline"
          to="/state-and-lifecycle"
          getProps={isActive}
        >
          State and Lifecycle
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="handling-events"
          data-cy="handling-events"
          className="dim black no-underline"
          to="/handling-events"
          getProps={isActive}
        >
          Handling Events
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="conditional-rendering"
          data-cy="conditional-rendering"
          className="dim black no-underline"
          to="/conditional-rendering"
          getProps={isActive}
        >
          Conditional Rendering
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="lists-and-keys"
          data-cy="lists-and-keys"
          className="dim black no-underline"
          to="/lists-and-keys"
          getProps={isActive}
        >
          Lists and Keys
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="forms"
          data-cy="forms"
          className="dim black no-underline"
          to="/forms"
          getProps={isActive}
        >
          Forms
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="lifting-state-up"
          data-cy="lifting-state-up"
          className="dim black no-underline"
          to="/lifting-state-up"
          getProps={isActive}
        >
          Lifting State Up
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="composition-vs-inheritance"
          data-cy="composition-vs-inheritance"
          className="dim black no-underline"
          to="/composition-vs-inheritance"
          getProps={isActive}
        >
          Composition vs Inheritance
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="thinking-in-react"
          data-cy="thinking-in-react"
          className="dim black no-underline"
          to="/thinking-in-react"
          getProps={isActive}
        >
          Thinking in React
        </Link>
      </div>
      <div className="pv2">
        <Link
          id="code-splitting"
          data-cy="code-splitting"
          className="dim black no-underline"
          to="/code-splitting"
          getProps={isActive}
        >
          Code Splitting
        </Link>
      </div>
    </div>
  );
};

export default Menu;
