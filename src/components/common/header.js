import React, { Component } from "react";
import { withRouter, NavLink as Link } from 'react-router-dom';
import { removeLocalStorage } from '@/utils/utils';
import PropTypes from 'prop-types';
import './header.css';

class Headser extends Component {
  handleLogout() {
    removeLocalStorage('authLoggedUser')
    this.props.history.push('/login')
  };
  render () {
    return (
      <div className="wrapper mod-header clearfix">
        <h1 className="site-logo fl">Logo</h1>
        <ul className="mod-menu fl">
          <li><Link to="/" activeClassName="activeRoute">Home</Link></li>
          <li><Link to="/category" activeClassName="activeRoute">category</Link></li>
          <li><Link to="/about" activeClassName="activeRoute">about</Link></li>
          <li><Link to="/help" activeClassName="activeRoute">Help</Link></li>
        </ul>
        <button className="mod-quick-fn ui-btn btn-xs fr" onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    )
  }
}
export default withRouter(Headser)