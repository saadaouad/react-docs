import React from "react";
import { shallow } from "enzyme";
import Menu from "../index.js";

it("Menu component renders without crashing", () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper.find("#introducing-jsx").props().to).toBe("/introducing-jsx");
  expect(wrapper.find("#components-and-props").props().to).toBe(
    "/components-and-props"
  );
  expect(wrapper.find("#state-and-lifecycle").props().to).toBe(
    "/state-and-lifecycle"
  );
  expect(wrapper.find("#handling-events").props().to).toBe("/handling-events");
  expect(wrapper.find("#conditional-rendering").props().to).toBe(
    "/conditional-rendering"
  );
  expect(wrapper.find("#lists-and-keys").props().to).toBe("/lists-and-keys");
  expect(wrapper.find("#forms").props().to).toBe("/forms");
  expect(wrapper.find("#lifting-state-up").props().to).toBe(
    "/lifting-state-up"
  );
  expect(wrapper.find("#composition-vs-inheritance").props().to).toBe(
    "/composition-vs-inheritance"
  );
  expect(wrapper.find("#thinking-in-react").props().to).toBe(
    "/thinking-in-react"
  );
  expect(wrapper.find("#code-splitting").props().to).toBe(
    "/code-splitting"
  );
});
