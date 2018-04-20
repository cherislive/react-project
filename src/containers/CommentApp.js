import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import '../assets/css/Comment.css';

class CommentApp extends Component {  
  render () {
    return (
      <div className='mod-container'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}
export default CommentApp
