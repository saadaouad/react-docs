import React from "react";

const MainComponent = () => {
  return (
    <div className="pa4">
      <p data-cy="main-component" className="f4">
        This is an implementation of all{" "}
        <a
          className="blue dim no-underline"
          data-cy="react-docs"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/getting-started.html"
        >
          React official docs sections
        </a>{" "}
        using{" "}
        <a
          className="blue dim no-underline"
          data-cy="create-react-app"
          target="_blank"
          rel="noopener noreferrer"
          href="https://facebook.github.io/create-react-app/"
        >
          CRA
        </a>
      </p>
    </div>
  );
};

export default MainComponent;
