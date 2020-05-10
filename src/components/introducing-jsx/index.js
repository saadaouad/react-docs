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
    <div className="pa4">
      <h2 data-cy="title">Introducing JSX</h2>
      <p data-cy="content">Hello, {formatName(user)}!</p>
    </div>
  );
};

export default IntroducingJSX;
