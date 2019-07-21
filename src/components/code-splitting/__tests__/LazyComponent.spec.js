import React from "react";
import ReactDOM from "react-dom";
import LazyComponent from "../LazyComponent";

it("LazyComponent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LazyComponent />, div);
});
