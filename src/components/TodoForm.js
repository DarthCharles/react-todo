import React from 'react';

export default React.createClass({
  displayName: 'TodoForm',
  getInitialState() {
    return {
      input: ''
    }
  },

  handleChange(e) {
    this.setState({ input: e.target.value })
  },

  handleSubmit() {
    const { addTodo } = this.props;
    const { input } = this.state;

    if ( input ) {
      addTodo(input);
    }

    this.setState({input: ''});
    this.refs.todo.value = '';
  },

  render() {
    return(<div className="input-group">
      <input
        className="form-control"
        type="text"
        ref="todo"
        onChange={ this.handleChange }
      />
      <span className="input-group-btn">
        <input
          className="btn btn-primary"
          type="submit"
          value="Add 😍"
          onClick={ this.handleSubmit }
        />
      </span>
    </div>)
  }
});
