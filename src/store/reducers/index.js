import { combineReducers } from 'redux';
import comments from './comments';
import todos from './todos/todos';
import visibilityFilter from './todos/visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
  comments
})
