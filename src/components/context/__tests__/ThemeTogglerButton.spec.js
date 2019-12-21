import React from "react";
import ReactDOM from "react-dom";
import ThemeTogglerButton from "../ThemeTogglerButton";

it("ThemeTogglerButton component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ThemeTogglerButton />, div);
});
