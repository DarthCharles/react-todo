import React from 'react';

export default React.createClass({
  displayName: 'Todo',

  handleRemove() {
    const { index, removeTodo } = this.props;
    removeTodo(index)
  },

  render() {
    const { value } = this.props;
    return (<li className="list-group-item">
      { value }
      <span
        className="pull-right"
        onClick={ this.handleRemove }
        style={ {cursor: 'pointer'} }>
        ❌
      </span>
    </li>);
  }
});
