import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { baseName } from '@/envconfig'
import requireAuth from './auth';
import Loadable from 'react-loadable';
import Loading from '@/components/common/loading';


const App = Loadable({
  loader: () => import('@/page/App'),
  loading: Loading,
});
const Help = Loadable({
  loader: () => import('@/page/help'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('@/page/404'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('@/page/user/login'),
  loading: Loading,
});

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
class RouteMap extends Component {
  render () {
    return (
      <Router basename={baseName}>
        <Switch>
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route path='/error' component={NotFound} />
          <Route path='/' component={props => requireAuth(App, props)} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    )
  }
}
export default RouteMap;