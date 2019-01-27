import React from "react";

class MainComponent extends React.Component {
  render() {
    return (
      <div className="tc pv3">
        <p className="f4">
          This is an implementation of all{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
          React official docs sections
          </a> using{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/create-react-app/"> 
          CRA</a>
        </p>
      </div>
    );
  }
}

export default MainComponent;
