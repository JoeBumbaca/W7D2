
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { Root } from './components/root';
import { allTodos } from './reducers/selectors'
import { fetchTodos } from './actions/todo_actions'

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('root');
  let store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

  ReactDOM.render(
    <Root store={store} />, 
    content
  )
})

