import React from "react";

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="tc">
        <h2>Handling events</h2>
        <div className="pv3">
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "Click here" : "Thanks!"}
          </button>
        </div>
      </div>
    );
  }
}

export default HandlingEvents;
