import { Router } from "@reach/router";
import React from "react";
import CodeSplitting from "../components/code-splitting";
import ComponentsAndProps from "../components/components-and-props";
import CompositionVsInheritance from "../components/composition-vs-inheritance";
import ConditionalRendering from "../components/conditional-rendering";
import Context from "../components/context";
import Forms from "../components/forms";
import HandlingEvents from "../components/handling-events";
import Home from "../components/home";
import Hooks from "../components/hooks";
import CustomHook from '../components/hooks/CustomHook';
import EffectHook from '../components/hooks/EffectHook';
import StateHook from "../components/hooks/StateHook";
import IntroducingToJsx from "../components/introducing-jsx";
import Calculator from "../components/lifting-state-up";
import ListsAndKeys from "../components/lists-and-keys";
import MainComponent from "../components/main-component";
import StateAndLifeCycle from "../components/state-and-lifecycle";
import ThinkingInReact from "../components/thinking-in-react";


let name = "Saad Aouad";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/">
          <MainComponent path="/" />
          <ConditionalRendering path="/conditional-rendering" />
          <HandlingEvents path="/handling-events" />
          <IntroducingToJsx path="/introducing-jsx" />
          <ComponentsAndProps path="/components-and-props" name={name} />
          <ListsAndKeys path="/lists-and-keys" />
          <StateAndLifeCycle path="/state-and-lifecycle" />
          <Forms path="/forms" />
          <Calculator path="/lifting-state-up" />
          <CompositionVsInheritance path="/composition-vs-inheritance" />
          <ThinkingInReact path="/thinking-in-react" />
          <CodeSplitting path="/code-splitting" />
          <Context path="/context" />
          <Hooks path="/hooks" />
          <StateHook path="/hooks/state-hook" />
          <EffectHook path="/hooks/effect-hook" />
          <CustomHook path="/hooks/custom-hook" />
        </Home>
      </Router>
    </div>
  );
};

export default App;
