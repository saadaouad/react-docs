import React from "react";
import { shallow } from "enzyme";
import TemperatureInput from "../TemperatureInput";

it("Temperature input renders without crashing", () => {
  const wrapper = shallow(<TemperatureInput />);
  expect(wrapper.exists()).toBe(true);
});
