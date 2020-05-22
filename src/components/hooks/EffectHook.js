import React, { useEffect, useState } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return function cleanup() {
      document.title = "React App";
    };
  }, [count]);

  return (
    <div className="pa4">
      <h2 className="tl" data-cy="state-hook">
        Effect Hook
      </h2>
      <p className="tl">
        The Effect Hook lets you perform side effects in function components:
      </p>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => incrementCount()}>Click me</button>
      </div>
    </div>
  );
}

export default EffectHook;
