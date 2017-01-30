import React, { Component } from 'react';
import TodoItem from './todo-item';

class Todos extends Component {
  render() {
    console.log(this.props);
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todos</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todoItems: React.PropTypes.array
}

export default Todos;