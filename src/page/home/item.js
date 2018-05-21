import React, { Component } from 'react';
class HomeItem extends Component {
  render() {
    return (
      <div>
        <h3>嵌套路由：</h3>
        <p>{this.props.match.params.name || 'NONE'}</p>
        <div className="mod-components">
          <button className="ui-btn">INCREMENT</button>
          <button className="ui-btn">DECREMENT</button>
        </div>
      </div>
    );
  }
}

export default HomeItem;
