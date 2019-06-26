export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => ({dispatch, getState}) => {
  return TodoAPIUtil.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => ({ dispatch }) => {
  return TodoAPIUtil.createTodo(todo)
  .then(todo => dispatch(receiveTodo(todo)),
  err => dispatch(receiveErrors(err.responseJSON))
  );
};



