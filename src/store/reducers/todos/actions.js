
// 改变内部 state 的唯一方法是 dispatch 的一个 action
// action 可以被序列化，用日记记录和存储下来 后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// action creators
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

