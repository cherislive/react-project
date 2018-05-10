import React, { Component } from 'react';
class HomeItem extends Component {
  render() {
    return (
      <div>
        <h3>嵌套路由：</h3>
        <p>{this.props.match.params.name || 'NONE'}</p>
      </div>
    );
  }
}

export default HomeItem;
