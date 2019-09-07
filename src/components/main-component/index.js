import React from "react";

class MainComponent extends React.Component {
  render() {
    return (
      <div className="tc pv3">
        <p data-cy="main-component" className="f4">
          This is an implementation of all{" "}
          <a data-cy="react-docs" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
          React official docs sections
          </a> using{" "}
          <a data-cy="create-react-app" target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/create-react-app/"> 
          CRA</a>
        </p>
      </div>
    );
  }
}

export default MainComponent;
