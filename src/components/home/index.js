import React from "react";
import Header from "../header/index.js";
import Menu from "../menu/index.js";
import HappyHacking from "../happy-hacking/index.js";
import ErrorBoundary from "../error-boundary/index.js";

const Home = ({ children }) => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className="flex">
        <ErrorBoundary>
          <Menu />
        </ErrorBoundary>
        <div className="w-80-ns">
          <ErrorBoundary>
            <div>{children}</div>
            <div className="fixed bottom-0 right-0 ph3">
              <HappyHacking />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default Home;
