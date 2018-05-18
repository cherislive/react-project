// import { createStore, combineReducers, applyMiddleware } from 'redux';
/**
 * 中文文档： http://cn.redux.js.org/
 * 
 */
import createHistory from 'history/createBrowserHistory';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware/*, push*/ } from 'react-router-redux';
import authCheck from "@/store/authCheck";
import rootReducer from '@/store/reducers';
import Debug from '@/utils/debug';
const debug = new Debug('Store');

export const history = createHistory();
// Apply the middleware to the store
const middleware = routerMiddleware(history);
// enhancers
const enhancers = [];
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof composeWithDevToolsExtension === 'function') { // 支持redux开发工具拓展的组合函数
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const store = createStore(
  rootReducer,
  // 组合redux中间价和加强器，强化redux
  composeEnhancers(
    // applyMiddleware(...middleware, authCheck), // 启用中间件
    applyMiddleware(...middleware, authCheck), // 启用中间件
    ...enhancers
  )
)
// Dispatch from anywhere like normal.
// store.dispatch(push('/foo'))
// 监听state变化
store.subscribe(() => {
  debug('store发生了变化');
});
export default store;


// 提供getState()方法获取state
// 提供dispatch(action)方法更新state
// 通过subscribe(方法)注册监听器
