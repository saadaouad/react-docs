import React, {Component} from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Mohammed',
  lastName: 'Abu muslim',
};

class IntroducingJSX extends Component {
  render() {
    return (
      <div>
        <p>
          Hello, {formatName(user)}!
        </p>
      </div>
    );
  }
}

export default IntroducingJSX;
