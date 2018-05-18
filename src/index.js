import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RouterMap from '@/router';
import store from '@/store';
import registerServiceWorker from '@/registerServiceWorker';

import '@/assets/css/base.css';
import '@/assets/css/common.css';
import '@/mock'  // 模拟数据 开发阶段使用

import Debug from '@/utils/debug';
const debug = new Debug('Root');
debug('STORE', store);
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
