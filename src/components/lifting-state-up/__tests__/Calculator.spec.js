import React from "react";
import { shallow } from "enzyme";
import Calculator from "../";

it("Calculator component renders without crashing", () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.exists()).toBe(true);
});
