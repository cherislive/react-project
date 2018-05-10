import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from '@/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import commentsReducer from '@/reducers/comments';
import registerServiceWorker from '@/registerServiceWorker';

import '@/assets/css/base.css';
import '@/assets/css/common.css';
import '@/mock'  // 模拟数据 开发阶段使用

const store = createStore(commentsReducer)
// 监听state变化
store.subscribe(() => {
  console.log('store发生了变化');
});

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
}
render(RouterMap);

registerServiceWorker();
