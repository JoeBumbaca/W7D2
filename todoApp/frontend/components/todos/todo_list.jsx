import React from 'react';
import { TodoListItem } from "./todo_list_item";

class TodoList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: props.todos
    }
  }

  render () {
    return (
      <ul> 
      <h1> Todo List </h1>
        {this.state.todos.map( (todo) =>
          <TodoListItem key={todo.id} todo={todo} />
        )}
      </ul>
    );
  }

}

export default TodoList;