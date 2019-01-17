import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import createMockStore from "redux-mock-store";
import TodoList from "../TodoList";
import { Creators as TodosActions } from "../../strore/ducks/todos";

const INITIAL_STATE = {
  todos: [
    { id: 0, text: "Fazer Café" },
    { id: 1, text: "Estudar" },
    { id: 2, text: "Investir" }
  ]
};
const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

describe("TodoList component", () => {
  it("show render todos", () => {
    const wrapper = mount(
      shallow(
        <Provider store={store}>
          <TodoList />
        </Provider>
      ).get(0)
    );
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("should be able to add new todo", () => {
    const wrapper = mount(
      shallow(
        <Provider store={store}>
          <TodoList />
        </Provider>
      ).get(0)
    );
    wrapper.find("button").simulate("click");
    expect(store.getActions()).toContainEqual(
      TodosActions.addTodo("Novo todo")
    );
  });

  it("should be able to remove todo", () => {
    const wrapper = mount(
      shallow(
        <Provider store={store}>
          <TodoList />
        </Provider>
      ).get(0)
    );
    wrapper
      .find("li")
      .first()
      .simulate("click");
    expect(store.getActions()).toContainEqual(
      TodosActions.removeTodo(INITIAL_STATE.todos[0].id)
    );
  });
});
