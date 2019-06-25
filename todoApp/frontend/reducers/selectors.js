
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let todos = keys.map(id => (state.todos[id]));
  return todos;
};