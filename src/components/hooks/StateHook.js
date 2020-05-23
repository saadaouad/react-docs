import React, { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div className="pa4">
      <h2 className="tl" data-cy="title">
        State Hook
      </h2>
      <p className="tl">
        This example renders a counter. When you click the button, it increments
        the value:
      </p>
      <div>
        <p id="count" data-cy="count">
          You clicked {count} times
        </p>
        <button
          id="increment-count"
          data-cy="increment-count"
          onClick={() => incrementCount()}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default StateHook;
