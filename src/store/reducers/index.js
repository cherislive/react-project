import { combineReducers } from 'redux';
import todoApp from './todos';
import comments from './comments';

export default combineReducers({
  todoApp,
  comments
})
