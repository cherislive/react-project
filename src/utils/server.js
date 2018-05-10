import axios from 'axios';
import promise from 'es6-promise';
import Qs from 'qs';
import { baseURL } from '@/envconfig';
import { removeLocalStorage } from './utils';
promise.polyfill();
axios.defaults.timeout = 12000;
const CancelToken = axios.CancelToken;
let cancel; // 创建取消令牌
// 添加一个响应拦截器
axios.interceptors.response.use((res) => {
  const status = res.status;
  const statusText = res.statusText || 'error';
  console.warn(res)
  if ((status >= 200 && status < 300) || status === 304) {
    // 跳过拦截器
    if (res.config && res.config.inSkipIntercept) {
      return res;
    }
    // 登录状态拦截 登录超时 或者 过期
    if (res.data && typeof res.data === 'object' && res.data.code && res.data.code === 90003) {
      removeLocalStorage('uID')
      // router.push({ path: '/login' })
      // store.dispatch(push('/login'))
    }
    return res;
  } else {
    // router.push({ path: '/error', query: { status: res.status } })
    var error = new Error(statusText);
    error.response = res;
    throw error;
  }
}, (err) => {
  // 系统错误，比如500、404等
  let _queryData = {}
  const _errResponse = err.response || {};
  const _responseData = _errResponse.data || {};
  if (typeof _responseData !== 'object') {
    _queryData.status = _errResponse.status || 'X10021';
    _queryData.statusText = _errResponse.statusText;
    _queryData.errorData = _responseData;
  } else {
    _queryData = _responseData;
  }
  // router.push({
  //   path: '/error',
  //   query: _queryData
  // })
  return Promise.reject(err)
})

class Server {
  async getData (url = '', options = {}) {
    let data = options.data || {}
    let method = options.type ? options.type.toUpperCase() : 'POST'
    options.headers = options.headers || {}
    if (url.indexOf('mock') === -1) {
      url = baseURL + url
    }
    options.headers['Accept'] = 'application/json'
    if (options.contentType === 'json') {
      options.headers['Content-Type'] = 'application/json;charset=UTF-8'
    } else {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      data = Qs.stringify(data)
    }
    try {
      let response = await axios({
        method,
        url,
        data: method === 'POST' ? data : null,
        headers: options.headers,
        inSkipIntercept: options.inSkipIntercept,
        withCredentials: false,   // 当前请求为跨域类型时是否在请求中协带cookie
        cancelToken: new CancelToken((c) => { // 这个executor 函数接受一个cancel function作为参数          
          cancel = c;
        })
      })
      return response.data
    } catch (error) {
      throw error;
    }
  }
  cancellation (msg) {
    cancel(msg || 'Operation canceled by the user.');
  }
}
export default Server
