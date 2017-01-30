import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const completed = this.props.todo.completed;
    return (
      <div>
        {completed &&
          <li className="Todo">
            <strong>{this.props.todo.title}</strong>
          </li>
        }
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;