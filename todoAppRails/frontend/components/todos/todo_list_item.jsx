import React from 'react';

export const TodoListItem = ({ todo }) => 
<li key={todo.id}>
  <p>{todo.title}</p>
  <p>{todo.body}</p>
</li>