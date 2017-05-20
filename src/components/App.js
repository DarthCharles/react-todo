import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default React.createClass({

  getInitialState() {
    return {
      data: ['Lavar la ropa', 'ir a la escuela']
    }
  },

  addNewTodo(val) {
    const { data } = this.state;
    data.push(val);
    this.setState({ data });
  },

  deleteTodo() {

  },

  render() {
    const { data } = this.state;

    return <div className="container">
      <div className="row">
        <div className="col-md-6 jumbotron">
          <h1>Todo List 📝</h1>
          <TodoForm addTodo={ this.addNewTodo } />
          <TodoList data={ data } />
        </div>
      </div>
    </div>
  }
});
