import React from "react";
import { shallow } from "enzyme";
import LoginControl from "../index.js";

it("LoginControl component renders without crashing", () => {
  const wrapper = shallow(<LoginControl />);
  expect(wrapper.state().isLoggedIn).toBe(false);
  wrapper.find('#login-button').simulate('click');
  expect(wrapper.state().isLoggedIn).toBe(true);
  wrapper.find("#logout-button").simulate('click');
  expect(wrapper.state().isLoggedIn).toBe(false);
});
