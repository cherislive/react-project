import { combineReducers } from 'redux'
import todos from './todos';
import visibilityFilter from './visibilityFilter';
// action types
// const ADD_TODO = 'ADD_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
// const TOGGLE_TODO = 'TOGGLE_TODO'
// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// const initialState = {
//   visibilityFilter: 'SHOW_ALL',
//   todos: []
// }

// Plan A
// const todoApp = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       // return Object.assign({}, state, {
//       //   visibilityFilter: action.filter
//       // });
//       return {
//         ...state, ...{
//           visibilityFilter: action.filter
//         }
//       };
//     case ADD_TODO:
//       return {
//         ...state, ...{
//           todos: [...state.todos, {
//             text: action.text,
//             completed: false
//           }]
//         }
//       };
//     case TOGGLE_TODO:
//       return {...state, ...{
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       }};
//     default:
//       return state;
//   }
// }

// Plan B
// const todoApp = (state = {}, action) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

// Plan C
const todoApp = combineReducers({
  visibilityFilter,
  todos
})
export default todoApp;
