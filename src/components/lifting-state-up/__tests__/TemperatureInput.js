import React from "react";
import { shallow } from "enzyme";
import { spy } from "sinon";
import TemperatureInput from "../TemperatureInput";

it("Temperature input renders without crashing", () => {
  const handleClick = spy();
  const wrapper = shallow(<TemperatureInput />); 
  wrapper.instance().handleClick;
});
