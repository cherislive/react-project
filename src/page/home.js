import React, { Component } from 'react';
import Header from '../components/common/header';
import Comment from '../containers/CommentApp';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="wrapper mp-body">
            <div className="mod-panel">
              <Comment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
