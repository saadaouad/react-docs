import React from "react";
import ReactDOM from "react-dom";
import Context from "../index";

it("Context component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Context />, div);
});
