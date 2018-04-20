import React, { Component } from "react";
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }
  // 评论时间计算
  componentWillMount () {
    this._updateTimeString()
    this.timer = setInterval(this._updateTimeString.bind(this), 5000)
  }
  // 评论时间清除计数器
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 计算时间
  _updateTimeString () {
    const comment = this.props.item
    const duration = (+Date.now() - comment.createdTime) / 1000
    let _timeString
    if (duration < 60) {
      _timeString = `${Math.round(Math.max(duration, 1))} 秒前`
    } else {
      if (duration > 60 * 60) {
        if (duration > 60 * 60 * 12) {
          _timeString = new Date(comment.createdTime).toLocaleTimeString()
        } else {
          _timeString = `${Math.round(duration / 60)} 小时前`
        }
      } else {
        _timeString = `${Math.round(duration / 60)} 分钟前`
      }
    }
    this.setState({
      timeString: _timeString
    })
  }
  // 评论内容格式化
  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
  render () {
    return (
      <div className="comment-list-item">
        <h3 className="comment-item-tit"><em>{this.props.item.username}</em> 评论说：</h3>
        <p className="comment-item-content" dangerouslySetInnerHTML={{ __html: this._getProcessedContent(this.props.item.content)}}></p>
        <div className="comment-item-time">{this.state.timeString}</div>
        <span className="ui-btn comment-item-delete btn-danger btn-xs" onClick={this.handleDeleteComment.bind(this)}>删除</span>
      </div>
    )
  }
}
export default Comment