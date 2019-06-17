import React, { Component } from "react";

class CodeSplitting extends Component {
  handleClick = () => {
    import("./moduleA")
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div className="tc">
        {" "}
        <h2>Code Splitting</h2>
        <div>
          <button onClick={this.handleClick}>Load</button>
        </div>
      </div>
    );
  }
}

export default CodeSplitting;
