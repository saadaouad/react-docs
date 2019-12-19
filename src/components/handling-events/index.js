import React from "react";

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <div className="tc">
        <h2 data-cy="title">Handling events</h2>
        <div className="pv3">
          <button data-cy="button" onClick={this.handleClick}>
            {this.state.isToggleOn ? "Click here" : "Thanks!"}
          </button>
        </div>
      </div>
    );
  }
}

export default HandlingEvents;
