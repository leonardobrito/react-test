import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

const todos = [
  { id: 0, text: "Fazer Café" },
  { id: 1, text: "Estudar" },
  { id: 2, text: "Investir" },
  { id: 3, text: "Testar" }
];

describe("TodoList component", () => {
  it("show render todos", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({ todos });
    expect(wrapper.find("li")).toHaveLength(4);
  });

  it("shold be able to add new todo", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({ todos });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("todos")).toHaveLength(5);
  });

  it("shold be able to remove todo", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({ todos });
    wrapper
      .find("li")
      .first()
      .simulate("click");
    expect(wrapper.state("todos")).not.toContain(todos[0]);
  });
});
