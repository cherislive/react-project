import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    // const comments = [
    //   { username: 'Traffic', content: 'New vs Returning' },
    //   { username: 'Revenue', content: 'New vs Recurring' },
    //   { username: 'Traffic', content: 'Direct vs Recurring' }
    // ]
    return (
      <div className="comment-list">
        {this.props.comments.map((item, i) => 
          <Comment item={item} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
        )}
      </div>
    )
  }
}
export default CommentList
