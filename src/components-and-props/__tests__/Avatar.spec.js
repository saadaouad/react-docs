import React from "react";
import { shallow } from "enzyme";
import Avatar from "../Avatar.js";

it("Avatar component renders without crashing", () => {
  const wrapper = shallow(<Avatar avatarUrl="https://s.yimg.com/ap/build/images/refencing-announcement/bird2.jpg" name="Canar" />);
  const picture = (
    <img className="Avatar" src="https://s.yimg.com/ap/build/images/refencing-announcement/bird2.jpg" alt="Canar" />
  );
  expect(wrapper.contains(picture)).toEqual(true);
});
