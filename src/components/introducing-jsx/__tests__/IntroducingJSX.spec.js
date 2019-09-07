import React from "react";
import { shallow } from "enzyme";
import IntroducingJSX from "../index.js";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Mohammed",
  lastName: "Abu muslim"
};

it("IntroducingJSX component renders without crashing", () => {
  const wrapper = shallow(<IntroducingJSX user={user} />);
  const formatedName = <p data-cy="content">Hello, {formatName(user)}!</p>;
  expect(wrapper.contains(formatedName)).toEqual(true);
});
