/* eslint-disable no-undef */
import { shallow } from "enzyme";
import React from "react";
import StateHook from "../StateHook.js";

it("Test State Hook counter", () => {
  const wrapper = shallow(<StateHook />);
  wrapper.find("#count").prop(0);
  wrapper.find("#increment-count").simulate("click");
  wrapper.find("#count").prop(1);
});
