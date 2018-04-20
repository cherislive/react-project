import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { localStorage } from '@/utils/utils';
class login extends Component {
  handleLogin () {
    localStorage('authLoggedUser', Date.parse(new Date()))
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="mp-body tc">
        <button className="ui-btn" onClick={this.handleLogin.bind(this)}>Login</button>
      </div>
    );
  }
}
export default withRouter(login);
