/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 弹框
*/

import Dialog from './dialog.js';

// 默认值
let defaults = {
  layerClick: false
};

let _TPL = null;

let initOptions = (options) => {
  let args = Object.assign({}, defaults, options)
  return args;
}

let _POP = (type, content, cb, opts) => {
  if (_TPL) {
    _TPL.destroy();
    _TPL = null;
  }
  if (!content) {
    return;
  }
  if (typeof cb !== 'function' && typeof cb === 'object') {
    opts = cb;
  }
  opts = opts || {};
  let callback = null;
  if (typeof opts.shown === 'function') {
    callback = opts.shown
  }
  if (typeof cb === 'function') {
    callback = cb
  }
  let _opts = initOptions(opts)
  const args = {
    type,
    content,
    callback,
    opts: _opts
  }
  console.log(args)
  _TPL = _TPL || Dialog.newInstance({
    ...args,
  });
  return _TPL;
};
export default {
  alert(content, callback, opts) {
    _POP('alert', content, callback, opts);
  },
  confirm(content, callback, opts) {
    _POP('confirm', content, callback, opts);
  },  
  close () {
    if (_TPL) {
      _TPL.destroy();
      _TPL = null;
    }
  },
};
