import React, { Component } from "react";
import { todo } from "../seedData";
import Todos from "./Todos";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      list: todo,
      value: ""
    };
  }


  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      name: this.state.value,
      isCompleted: false
    };

    this.setState({
      list: [...this.state.list, newTodo]
    });
  };

  render() {
    return (
      <div className="TodoList">
        <h1>Hello!</h1>
        <ul>
          {this.state.list.map((todo, index) => {
            return <Todos key={index} item={todo} />;
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>
            Add into Form:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoList;
