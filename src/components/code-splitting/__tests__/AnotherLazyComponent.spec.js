import React from "react";
import ReactDOM from "react-dom";
import AnotherLazyComponent from "../AnotherLazyComponent";

it("AnotherLazyComponent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnotherLazyComponent />, div);
});
