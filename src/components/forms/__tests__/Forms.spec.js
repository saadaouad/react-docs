import React from "react";
import { mount } from "enzyme";
import { spy } from "sinon";
import Forms from "../";

it("Forms renders without crashing", () => {
  const onSubmit = spy();
  const wrapper = mount(<Forms onSubmit={onSubmit} />);
  const button = wrapper.find("button");
  button.simulate("submit");
});
