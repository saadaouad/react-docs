import React from "react";
import ReactDOM from "react-dom";
import CompositionVsInheritance from "../";

it("Composition vs inheritance renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CompositionVsInheritance />, div);
});
