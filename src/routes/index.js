import React from "react";
import { Router } from "@reach/router";
import MainComponent from "../components/main-component";
import Home from "../components/home";
import ConditionalRendering from "../components/conditional-rendering";
import HandlingEvents from "../components/handling-events";
import IntroducingToJsx from "../components/introducing-jsx";
import ListsAndKeys from "../components/lists-and-keys";
import StateAndLifeCycle from "../components/state-and-lifecycle";
import ComponentsAndProps from "../components/components-and-props/UserInfo";
import Forms from "../components/forms";
import Calculator from '../components/lifting-state-up';
import CompositionVsInheritance from '../components/composition-vs-inheritance';
import avatarUrl from "../avatar.jpeg";

let name = "Saad";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/">
          <MainComponent path="/" />
          <ConditionalRendering path="/conditional-rendering" />
          <HandlingEvents path="/handling-events" />
          <IntroducingToJsx path="/introducing-jsx" />
          <ComponentsAndProps
            path="/components-and-props"
            name={name}
            avatarUrl={avatarUrl}
          />
          <ListsAndKeys path="/lists-and-keys" />
          <StateAndLifeCycle path="/state-and-lifecycle" />
          <Forms path="/forms" />
          <Calculator path="/lifting-state-up" />
          <CompositionVsInheritance path="/composition-vs-inheritance" />
        </Home>
      </Router>
    </div>
  );
};

export default App;
