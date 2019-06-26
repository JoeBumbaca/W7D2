import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { receiveTodo, createTodo } from '../../actions/todo_actions';

// const mapStateToProps = state => ({
//   todos: allTodos(state)
// });

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo
});

export default connect(null, mapDispatchToProps)(TodoForm);