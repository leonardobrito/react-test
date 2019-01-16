import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "deploy app" }]
    });
  };

  removeTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id} onClick={() => this.removeTodo(todo.id)}>
              {todo.text}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.addTodo}>
          Adicionar todo
        </button>
      </Fragment>
    );
  }
}
