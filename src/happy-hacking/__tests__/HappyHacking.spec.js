import React from "react";
import { shallow } from "enzyme";
import HappyHacking from '../index.js';

it("HappyHacking component renders without crashing", () => {
  const wrapper = shallow(<HappyHacking />);
  const code = (
    <code>Happy hacking!</code>
  );
  expect(wrapper.contains(code)).toEqual(true);
});
