import React from 'react';

class HandlingEvents extends React.Component {
  handleClick = e => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  render() {
    const handleClick = this.handleClick;
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }
}

export default HandlingEvents;
