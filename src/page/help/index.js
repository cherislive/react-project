import React, { Component } from 'react';
class Help extends Component {
  handleGoback = () => {
    this.props.history.goBack();
    // this.props.history.push();
  }
  render() {
    return (
      <div>
        <div className="wrapper mod-components">
          <div className="container mod-components mod-panel">
            <h1 className="tc">HELP</h1>
            <div>
              前进<br />
              this.props.history.push();
            </div>
            <div>
              后退：<br />
              <button className="mod-quick-fn ui-btn" onClick={this.handleGoback.bind(this)}>Back</button>
            </div><br />
            <div>
              点击左侧菜单刷新当前组件: history.replace
            </div>
            <br />
            <div>
              <button className="ui-btn btn-outline">default</button>
              <button className="ui-btn btn-outline-primary">primary</button>
              <button className="ui-btn btn-outline-secondary">secondary</button>
              <button className="ui-btn btn-outline-success">success</button>
              <button className="ui-btn btn-outline-danger">danger</button>
              <button className="ui-btn btn-outline-warning">warning</button>
              <button className="ui-btn btn-outline-info">info</button>
            </div>
            <br />
            <div>
              <button className="ui-btn">default</button>
              <button className="ui-btn btn-primary">primary</button>
              <button className="ui-btn btn-secondary">secondary</button>
              <button className="ui-btn btn-success">success</button>
              <button className="ui-btn btn-danger">danger</button>
              <button className="ui-btn btn-warning">warning</button>
              <button className="ui-btn btn-info">info</button>
            </div>
            <br />
            <div>
              <button className="ui-btn btn-xs">default</button>
              <button className="ui-btn btn-sm">default</button>
              <button className="ui-btn">default</button>
              <button className="ui-btn btn-lg">default</button>
            </div>
            <br />
            <div>
              <button className="ui-btn btn-block">default</button>
              <button className="ui-btn btn-primary btn-block">default</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
