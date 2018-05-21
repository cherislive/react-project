import React, { Component } from "react";
import PropTypes from 'prop-types'

class Todo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
  handleClick () {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <li onClick={this.handleClick.bind(this)} style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>{text}</li>
    )
  }
}
export default Todo