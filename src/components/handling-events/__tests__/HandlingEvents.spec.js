import React from "react";
import { shallow } from "enzyme";
import HandlingEvents from "../index.js";

it("HandlingEvents component renders without crashing", () => {
  const wrapper = shallow(<HandlingEvents />);
  expect(wrapper.state().isToggleOn).toBe(true);
  wrapper.find('button').simulate('click');
  expect(wrapper.state().isToggleOn).toBe(false);
});
