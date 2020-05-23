import React from "react";

const ComponentsAndProps = ({ name }) => {
  return (
    <div className="pa4">
      <h2 data-cy="title">Components and Props</h2>
      <p data-cy="username" className="fw5">
        This is, {name}!
      </p>
    </div>
  );
};

export default ComponentsAndProps;
