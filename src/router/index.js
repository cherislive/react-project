import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import { localStorage } from '@/utils/utils';

const Home = Loadable({
  loader: () => import('../page/home'),
  loading: Loading,
  delay: 300
});
const Category = Loadable({
  loader: () => import('../page/category'),
  loading: Loading,
});
const About = Loadable({
  loader: () => import('../page/about'),
  loading: Loading,
});
const Help = Loadable({
  loader: () => import('../page/help'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('../page/404'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('../page/login'),
  loading: Loading,
});

// 登录验证
const requireAuth = (Layout, props) => {
  const authLoggedUser = localStorage('authLoggedUser')
  if (!authLoggedUser) { // 未登录
    return <Redirect to="/login" />;
  } else {
    return <Layout {...props} />
  }
};

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
class RouteMap extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/category" component={props => requireAuth(Category, props)} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

export default RouteMap;