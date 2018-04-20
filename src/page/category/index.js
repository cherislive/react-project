import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, NavLink as Link } from 'react-router-dom';
import { Switch, Route, NavLink as Link, Redirect } from 'react-router-dom';
import Header from '@/components/common/header';
import CategoryList from './CategoryList';
class Category extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper mp-body">
          <div className="mod-panel clearfix">
            <div className="mod-side fl">
              <ul className="sub-menu">
                <li><Link to={`${this.props.match.url}/shoes`}>Shoes</Link></li>
                <li><Link to={`${this.props.match.url}/boots`}>Boots</Link></li>
                <li><Link to={`${this.props.match.url}/footwear`}>Footwear</Link></li>
              </ul>
            </div>
            <div className="layout-main mod-container">
              <Switch>
                <Route path={`${this.props.match.path}/:type`} component={CategoryList} />
                {/**
                  * Redirect 保护式路由
                  * 重定向
                  * 从 {this.props.match.path} 跳转到 {this.props.match.path}/passed
                  * */}
                <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={CategoryList} />
              </Switch>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Category;
