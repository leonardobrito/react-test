import reducer, { Creators as TodosActions } from "../todos";

describe("Todos Reducers", () => {
  it("should return default state when called without action", () => {
    const state = reducer([], {});
    expect(state).toEqual([]);
  });

  it("should be able to add new todo", () => {
    const state = reducer([], TodosActions.addTodo("Novo todo"));
    expect(state[0].text).toBe("Novo todo");
  });

  it("should be able to remove a todo", () => {
    const state = reducer(
      [{ id: 1, text: "Novo todo" }],
      TodosActions.removeTodo(1)
    );
    expect(state).toHaveLength(0);
  });
});
