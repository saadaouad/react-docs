import React from "react";

const ComponentsAndProps = (
  {
    name,
    avatarUrl,
  },
) => {
  return (
    <div className="tc">
      <h2 data-cy="title">Components and Props</h2>
      <div className="pv3">
        <h4 data-cy="username" className="fw5">
          This is, {name}!
        </h4>
        <img
          data-cy="avatar"
          className="Avatar"
          src={avatarUrl}
          alt={name}
        />
      </div>
    </div>
  );
};

export default ComponentsAndProps;
