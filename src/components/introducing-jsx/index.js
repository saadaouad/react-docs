import React, { Component } from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Mohammed",
  lastName: "Abu muslim"
};

class IntroducingJSX extends Component {
  render() {
    return (
      <div className="tc">
        <h2 data-cy="introducing-jsx-title">Introducing JSX</h2>
        <div className="pv3">
          <p data-cy="introducing-jsx-content">Hello, {formatName(user)}!</p>
        </div>
      </div>
    );
  }
}

export default IntroducingJSX;
