import React, { Component } from 'react';
class CategoryList extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.type}
      </div>
    );
  }
}

export default CategoryList;
