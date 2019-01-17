import SagaTester from "redux-saga-tester";
import rootSaga from "../index";

import {
  Types as TodosTypes,
  Creators as TodosActions
} from "../../ducks/todos";

describe("Todos Saga", () => {
  let sagaTester = null;
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });
  it("should be able to fetch todos from API", async () => {
    sagaTester.dispatch(TodosActions.getTodosRequest());
    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);
    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosSuccess([
        { id: 0, text: "Fazer Café" },
        { id: 1, text: "Estudar" },
        { id: 2, text: "Investir" }
      ])
    );
  });
});
