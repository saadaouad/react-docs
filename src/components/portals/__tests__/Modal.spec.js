import React from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";

it("Modal renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Modal />, div);
});
