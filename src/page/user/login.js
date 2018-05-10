import React, { Component } from 'react';
import { Redirect, withRouter, NavLink as Link } from 'react-router-dom';
import { sessionStorage } from '@/utils/utils';
import API from '@/api';
/* A fake authentication function */
// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
// }
class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inSubmit: false,
      redirectToReferrer: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }
  // componentWillMount() {
  //   const _state = this.props.location.state || {}
  //   const _referrer = _state.referrer || {}
  //   console.log(this.props, _state)
  //   this.setState({ referrer: _referrer.pathname || '/' })
  // }
  componentWillUnmount() {  // 组件对应的 DOM 元素从页面中删除之前调用
    API.cancellation();
  }
  handleLogin() {
    this.tryLogin()
  }
  async tryLogin() {
    if (this.state.inSubmit) return;
    this.setState({ inSubmit: true })
    let res = await API.sendLogin();
    if (res.code !== 200) return;
    sessionStorage('authLoggedUser', res.data.id)
    this.setState({ redirectToReferrer: true })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div className="wrapper mod-components tc">
        <h1><br />A fake authentication <br /><br /><br /></h1>
        <button className={`ui-btn ${this.state.inSubmit ? 'disabled' : ''}`} onClick={this.handleLogin.bind(this)}>{this.state.inSubmit ? 'Loading...' : 'Login'}</button>
        <br /><br />
        <div><Link to="/help"><button className="ui-btn btn-outline">Help</button></Link></div>
      </div>
    );
  }
}
export default withRouter(login);
