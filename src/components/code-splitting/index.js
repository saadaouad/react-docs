import React, { Component, Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));
const AnotherLazyComponent = React.lazy(() => import("./AnotherLazyComponent"));

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
        <h2>Code Splitting</h2>
        <div>
          <button type="button" onClick={this.handleClick}>
            Load
          </button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
          <AnotherLazyComponent />
        </Suspense>
      </div>
    );
  }
}

export default CodeSplitting;
