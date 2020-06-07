/* eslint-disable no-undef */
import { shallow } from "enzyme";
import React from "react";
import Portals from "../";

describe("Test Portals component", () => {
  it("Toggle modal", () => {
    const wrapper = shallow(<Portals />);
    wrapper.find("#show-modal").simulate("click");
    wrapper.find("#hide-modal").simulate("click");
  });
});
