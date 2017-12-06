import React, {Component} from 'react';

class Clock extends React.Component {
  render() {
    return (
      <div>
        <p>It is {this.props.date.toLocaleTimeString()}.</p>
      </div>
    )
  }
}

export default Clock;
