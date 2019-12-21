import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Mohammed",
  lastName: "Abu muslim"
};

const IntroducingJSX = props => {
  return (
    <div className="tc">
      <h2 data-cy="title">Introducing JSX</h2>
      <div className="pv3">
        <p data-cy="content">Hello, {formatName(user)}!</p>
      </div>
    </div>
  );
};

export default IntroducingJSX;
