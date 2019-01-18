import SagaTester from "redux-saga-tester";
import rootSaga from "../index";
import api from "../../../services/api";
import MockAdapter from "axios-mock-adapter";

import {
  Types as TodosTypes,
  Creators as TodosActions
} from "../../ducks/todos";

const apiMock = new MockAdapter(api);

describe("Todos Saga", () => {
  let sagaTester = null;
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it("should be able to fetch todos from API", async () => {
    const todosFixture = [
      { id: 0, text: "Fazer Café" },
      { id: 1, text: "Estudar" },
      { id: 2, text: "Investir" }
    ];
    apiMock.onGet("todos").reply(200, todosFixture);
    sagaTester.dispatch(TodosActions.getTodosRequest());
    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);
    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosSuccess(todosFixture)
    );
  });

  it("should fail if response is not ok", async () => {
    apiMock.onGet("todos").reply(400, {});
    sagaTester.dispatch(TodosActions.getTodosRequest());
    await sagaTester.waitFor(TodosTypes.GET_FAILURE);
    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosFailure("Erro na requisição")
    );
  });
});
