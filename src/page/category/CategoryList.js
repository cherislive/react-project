import React, { Component } from 'react';
class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>动态路由：</h3>        
        <p>{this.props.match.params.name}</p>
      </div>
    );
  }
}

export default CategoryList;
