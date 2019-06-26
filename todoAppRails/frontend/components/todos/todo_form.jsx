import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    store.dispatch(this.props.createTodo(this.state))
      .then(() => this.setState({
        title: '',
        body: '',
        done: false
      }));
  } 

  updateTitle (e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateBody (e) {
    this.setState({
      body: e.currentTarget.value
    });
  } 


  render () {
    return <form onSubmit={this.handleSubmit} >
      <label> Title:
        <input onChange={this.updateTitle} type="text" value={this.state.title} />
      </label>
      <label> Body:
        <input onChange={this.updateBody} type="text" value={this.state.body} />
      </label>
      <input type="submit" value="Add Todo" />
    </form>
  }


}

export default TodoForm;