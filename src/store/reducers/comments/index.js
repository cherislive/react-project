// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

// reducer
const comments = (state = [], action) => {
  // if (!state) {
  //   state = { comments: [] }
  // }
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return action.comments
    case ADD_COMMENT:
      // 新增评论
      // return [...state, action.comment]
      let _tmpArr = [...state];
      _tmpArr.unshift(action.comment);
      return _tmpArr;
    case DELETE_COMMENT:
      // 删除评论
      return [
        ...state.slice(0, action.commentIndex),
        ...state.slice(action.commentIndex + 1)
      ]
    default:
      return state
  }
}
export default comments

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}