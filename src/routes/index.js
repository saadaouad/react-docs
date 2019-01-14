import React from "react";
import { Router } from "@reach/router";
import Home from "../components/main-component";
import ConditionalRendering from "../components/conditional-rendering";
import HandlingEvents from "../components/handling-events";
import IntroducingToJsx from "../components/introducing-jsx";
import ListsAndKeys from "../components/lists-and-keys";
import StateAndLifeCycle from "../components/state-and-lifecycle";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/">
          <ConditionalRendering path="/conditional-rendering" />
          <HandlingEvents path="/handling-events" />
          <IntroducingToJsx path="/introducing-jsx" />
          <ListsAndKeys path="/lists-and-keys" />
          <StateAndLifeCycle path="/state-and-lifecycle" />
        </Home>
      </Router>
    </div>
  );
};

export default App;
