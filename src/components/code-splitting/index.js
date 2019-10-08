import React, { Component, Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));
const AnotherLazyComponent = React.lazy(() => import("./AnotherLazyComponent"));

class CodeSplitting extends Component {
  render() {
    return (
      <div className="tc">
        <h2 data-cy="title">Code Splitting</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent dataCy="lazy-component" />
          <AnotherLazyComponent dataCy="another-lazy-component" />
        </Suspense>
      </div>
    );
  }
}

export default CodeSplitting;
