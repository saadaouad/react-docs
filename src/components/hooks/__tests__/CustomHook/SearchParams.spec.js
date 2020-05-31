import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "../../CustomHook/SearchParams";

it("SearchParams renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchParams />, div);
});
