import React from "react";
import { shallow } from "enzyme";
import ListItems from "../index.js";

const numbers = [1, 2, 3, 4, 5];

it("ListItems component renders without crashing", () => {
  const wrapper = shallow(<ListItems />);
  expect(wrapper.find(".list-items")).toHaveLength(numbers.length);
});
