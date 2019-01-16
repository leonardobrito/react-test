import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should renders as expected", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<p>Hello world.</p>)).toBe(true);
});
