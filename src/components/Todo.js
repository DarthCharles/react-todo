import React from 'react';

export default React.createClass({
  displayName: 'Todo',

  render() {
    const { value } = this.props;
    return(<li className="list-group-item">{ value }<span className="pull-right" style={{cursor: 'pointer'}}> ❌ </span></li>);
  }
});
