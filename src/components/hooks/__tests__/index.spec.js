/* eslint-disable no-undef */
import { shallow } from "enzyme";
import React from "react";
import Hooks from "../index.js";

it("Hooks renders without crashing", () => {
  const wrapper = shallow(<Hooks />);
  expect(wrapper.find("#state-hook").props().to).toBe("/hooks/state-hook");
  expect(wrapper.find("#effect-hook").props().to).toBe("/hooks/effect-hook");
});
