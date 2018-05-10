import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, NavLink as Link } from 'react-router-dom';
import { Switch, Route, NavLink as Link, Redirect } from 'react-router-dom';
import CategoryList from './CategoryList';
import Comment from '@/containers/CommentApp';
class Category extends Component {
  render() {
    const _MATCH = this.props.match
    return (
      <div>
        <div className="wrapper mod-components">
          <div className="container mod-panel layout-box">
            <div className="mod-side">
              <ul className="sub-menu">
                <li><Link to={`${_MATCH.url}/shoes`}>Shoes</Link></li>
                <li><Link to={`${_MATCH.url}/boots`}>Boots</Link></li>
                <li><Link to={`${_MATCH.url}/footwear`}>Footwear</Link></li>
              </ul>
            </div>
            <div className="box-col">
              <div className="wrapper mod-components">
                <Switch>
                  <Route path={`${_MATCH.path}/:name`} component={CategoryList} />
                  {/**
                    * Redirect 保护式路由
                    * 重定向
                    * 从 {_MATCH.path} 跳转到 {_MATCH.path}/passed
                    * */}
                  <Redirect from={`${_MATCH.path}`} to={`${_MATCH.path}/passed`} exact component={CategoryList} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <div className="wappper">
          <header className="container block-container tc">
            <h1 className="App-title">Comment</h1>
          </header>
          <div className="wrapper">
            <div className="container mod-components mod-panel">
              <Comment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
