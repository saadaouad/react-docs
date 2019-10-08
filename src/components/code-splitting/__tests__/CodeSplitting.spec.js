import React from "react";
import ReactDOM from "react-dom";
import CodeSplitting from "../";

it("CodeSplitting renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CodeSplitting />, div);
});
