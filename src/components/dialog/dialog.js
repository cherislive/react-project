/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc loading
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './dialog.css';

let DIALOG_EL = null;
const HANDLE_CLOSE = (callback) => {
  if (DIALOG_EL) {
    ReactDOM.unmountComponentAtNode(DIALOG_EL);
    document.body.removeChild(DIALOG_EL);
    DIALOG_EL = null;
    callback && callback();
  }
}

class AlertModal extends Component {
  static propTypes = {
    callback: PropTypes.func
  }
  handleClose() {
    HANDLE_CLOSE(this.props.callback);
  }
  render() {
    const _opts = this.props.opts;
    return (
      <div>
        <div className="dialog-hd">{_opts.title || '提示'}</div>
        <div className="dialog-body">
          <div>{this.props.content}</div>
        </div>
        <div className="dialog-ft">
          <button className="dialog-btn dialog-btn-primary" style={{ width: '100%' }} onClick={() => this.handleClose()}>{_opts.okText || '确 定'}</button>
        </div>
      </div>
    )
  };
}


class ConfirmModal extends Component {
  static propTypes = {
    callback: PropTypes.func
  }
  handleClose(state) {
    let callback = null
    if (state === 'confirm') {
      callback = this.props.callback;
    }
    HANDLE_CLOSE(callback);
  }
  render() {
    const _opts = this.props.opts;
    return (
      <div>
        <div className="dialog-hd">{_opts.title || '消息'}</div>
        <div className="dialog-body">
          <div>{this.props.content}</div>
        </div>
        <div className="dialog-ft">
          <button className="dialog-btn dialog-btn-default" style={{ width: '100%' }} onClick={this.handleClose.bind(this, 'cancel')}>{_opts.cancelText || '取 消'}</button>
          <button className="dialog-btn dialog-btn-primary" style={{ width: '100%' }} onClick={this.handleClose.bind(this, 'confirm')}>{_opts.okText || '确 定'}</button>
        </div>
      </div>
    )
  };
}

class Dialog extends Component {
  handleClose () {
    if (!this.props.opts.layerClick) return
    let callback = null
    if (this.props.type === 'alert') {
      callback = this.props.callback;
    }
    HANDLE_CLOSE(callback)
  }
  render() {
    let wrappedContent = null;
    const _opts = this.props;
    if (_opts.type === 'alert') {
      wrappedContent = <AlertModal content={_opts.content} callback={_opts.callback} opts={_opts.opts} />
    }
    if (_opts.type === 'confirm') {
      wrappedContent = <ConfirmModal content={_opts.content} callback={_opts.callback} opts={_opts.opts} />
    }
    return (
      <div>
        <div className="dialog-mask" onClick={this.handleClose.bind(this)}></div>
        <div className="dialog-wraper mod-dialog">
          <div className="dialog-modal">
            <div className="dialog-content">{wrappedContent}</div>            
          </div>
        </div>
      </div>
    );
  }
}

Dialog.newInstance = function newLoadingInstance(properties) {
  let props = properties || {};
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(React.createElement(Dialog, props), div);
  DIALOG_EL = div
  return {
    destroy() {
      HANDLE_CLOSE()
    },
  };
};

export default Dialog;