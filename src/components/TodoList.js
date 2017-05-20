import React from 'react';
import Todo from './Todo';

export default React.createClass({
  displayName: 'TodoList',

  render() {
    const { data, removeTodo } = this.props;
    return(<ul className="list-group">
      { data.map((todo, index) =>
        <Todo
          key={ index }
          index={ index }
          value={ todo }
          removeTodo={ removeTodo }
        />)
      }
    </ul>)
  }
});