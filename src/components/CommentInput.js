import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func.isRequired,
    onUserNameInputBlur: PropTypes.func
  }
  
  static defaultProps = {
    username: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      username: props.username,
      content: ''
    }
  }
  componentDidMount() {
    this.textarea.focus()
  }

  handleUserNameChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }
  handleUserNameBlur(e) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value)
    }
  }
  handleSubmit (e) {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({username, content, createdTime: +new Date() })
    }
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <div className="form-item">
          <span className="form-item-tit">用户名：</span>
          <div className="form-item-content">
            <input placeholder="请输入用户名" type="text" value={this.state.username} 
              onChange={this.handleUserNameChange.bind(this)}
              onBlur={this.handleUserNameBlur.bind(this)}
            />
          </div>
        </div>
        <div className="form-item">
          <span className="form-item-tit">评论内容：</span>
          <div className="form-item-content">
            <textarea placeholder="请输入评论内容。。。" rows="3" ref={(el) => this.textarea = el} value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
          </div>
        </div>
        <div className="form-item">
          <span className="form-item-tit"></span>
          <div className="form-item-content">
            <input type="button" value="提交" className="ui-btn" onClick={this.handleSubmit.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
export default CommentInput
