import React from "react";
import ReactDOM from "react-dom";
import CustomHook from "../../";

it("CustomHook renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CustomHook />, div);
});
