import React from "react";
import { shallow } from "enzyme";
import Page from "../Page.js";

it("Page component renders without crashing", () => {
  const wrapper = shallow(<Page />);
  expect(wrapper.state().showWarning).toBe(true);
  wrapper.find('button').simulate('click');
  expect(wrapper.state().showWarning).toBe(false);
});
