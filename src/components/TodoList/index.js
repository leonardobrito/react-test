import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../../strore/ducks/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => removeTodo(todo.id)}>
          {todo.text}
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo("Novo todo")}>
      Adicionar todo
    </button>
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
