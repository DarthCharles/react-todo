import React from 'react';
import Todo from './Todo';

export default React.createClass({
  displayName: 'TodoList',

  render() {
    const { data } = this.props;
    return(<ul className="list-group">
      { data.map((todo, index) => <Todo key={index} value={todo} />) }
    </ul>)
  }
});