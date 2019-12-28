import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "../";

it("ErrorBoundary component renders without crashing", () => {
  const children = "Awesome children";
  const Fragment = document.createElement("Fragment");
  ReactDOM.render(<ErrorBoundary children={children} />, Fragment);
});
