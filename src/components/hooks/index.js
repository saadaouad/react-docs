import { Link } from "@reach/router";
import React from "react";

const Hooks = () => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "b underline black" } : null;
  };
  return (
    <div className="pa4">
      <h2 data-cy="title" className="tl">
        Hooks
      </h2>
      <p className="tl">
        Hooks are a new addition in React 16.8. They let you use state and other
        React features without writing a class.
      </p>
      <div className="tl pv1">
        <Link
          id="state-hook"
          data-cy="state-hook"
          className="dim blue no-underline"
          to="/hooks/state-hook"
          getProps={isActive}
        >
          State Hook
        </Link>
      </div>
      <div className="tl pv1">
        <Link
          id="effect-hook"
          data-cy="effect-hook"
          className="dim blue no-underline"
          to="/hooks/effect-hook"
          getProps={isActive}
        >
          Effect Hook
        </Link>
      </div>
      <div className="tl pv1">
        <Link
          id="custom-hook"
          data-cy="custom-hook"
          className="dim blue no-underline"
          to="/hooks/custom-hook"
          getProps={isActive}
        >
          Custom Hook
        </Link>
      </div>
    </div>
  );
}

export default Hooks;
