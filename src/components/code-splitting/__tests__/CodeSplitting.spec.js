import React from "react";
import { mount } from "enzyme";
import { spy } from "sinon";
import ReactDOM from "react-dom";
import CodeSplitting from "../";

it("Dynamic import load without crashing", () => {
  const handleClick = spy();
  const wrapper = mount(<CodeSplitting handleClick={handleClick} />);
  const button = wrapper.find("button");
  button.simulate("submit");
});

it("CodeSplitting renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CodeSplitting />, div);
});
