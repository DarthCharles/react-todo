import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { addNewTodo, removeTodo } from  './../action-creators/todo';

export const App = React.createClass({

  render() {
    const { data, addNewTodo, removeTodo } = this.props;

    return <div className="container">
      <div className="row">
        <div className="col-md-6 jumbotron">
          <h1>Todo List 📝</h1>
          <TodoForm addTodo={ addNewTodo } />
          <TodoList
            data={data}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    data: state.todo
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNewTodo,
    removeTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

