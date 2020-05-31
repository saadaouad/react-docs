/* eslint-disable no-undef */
import { shallow } from "enzyme";
import React from "react";
import EffectHook from "../EffectHook.js";

it("Test Effect Hook counter", () => {
  const wrapper = shallow(<EffectHook />);
  wrapper.find("#count").prop(0);
  wrapper.find("#increment-count").simulate("click");
  wrapper.find("#count").prop(1);
});
