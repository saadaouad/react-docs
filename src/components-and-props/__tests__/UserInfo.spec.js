import React from "react";
import { shallow } from "enzyme";
import UserInfo from "../UserInfo.js";
import Avatar from "../Avatar.js";

it("UserInfo component renders without crashing", () => {
  const wrapper = shallow(
    <UserInfo
      avatarUrl="https://s.yimg.com/ap/build/images/refencing-announcement/bird2.jpg"
      name="Canar"
    />
  );
  const name = <h2>This is, Canar!</h2>;
  const picture = (
    <Avatar
      avatarUrl="https://s.yimg.com/ap/build/images/refencing-announcement/bird2.jpg"
      name="Canar"
    />
  );
  expect(wrapper.contains(name)).toEqual(true);
  expect(wrapper.contains(picture)).toEqual(true);
});
