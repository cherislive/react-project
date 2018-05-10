import React, { Component } from "react";
import { withRouter, NavLink as Link } from 'react-router-dom';
import { removeSessionStorage } from '@/utils/utils';
import './header.css';
class Headser extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentWillMount() { // 组件挂载开始之前
  }
  handleLogout(state) {
    removeSessionStorage('authLoggedUser')
    console.log(state)
    if (state === 'jump') {
      this.props.history.push('/login') // react-router v4 使用 history 控制路由跳转 https://github.com/brickspert/blog/issues/3
    }
  };
  render () {
    return (
      <div className="header-space">
      <div className="wrapper mod-header clearfix">
        <div className="container">
          <h1 className="site-logo fl">Logo</h1>
          <ul className="mod-menu fl">
            <li><Link to="/" exact activeClassName="activeRoute">Home</Link></li>
            <li><Link to="/category" activeClassName="activeRoute">category</Link></li>
            <li><Link to="/about" activeClassName="activeRoute">about</Link></li>
            <li><Link to="/help" activeClassName="activeRoute">Help</Link></li>
          </ul>
          <div className="fr">
            <button className="mod-quick-fn ui-btn btn-outline btn-xs" onClick={this.handleLogout.bind(this)}>Remove SS</button>
            <button className="mod-quick-fn ui-btn btn-xs" onClick={this.handleLogout.bind(this, 'jump')}>Logout</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default withRouter(Headser)