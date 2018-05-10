import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import requireAuth from '@/router/auth';
import Loading from '@/components/common/loading';
import Header from '@/components/common/header';
const Home = Loadable({
  loader: () => import('../page/home'),
  loading: Loading,
  // delay: 300
});
const Category = Loadable({
  loader: () => import('../page/category'),
  loading: Loading,
});
const About = Loadable({
  loader: () => import('../page/about'),
  loading: Loading,
});

class App extends Component {
  render() {
    const _MATCH = this.props.match
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/category" component={props => requireAuth(Category, props)} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Redirect from={`${_MATCH.path}`} to={`${_MATCH.path}/`} exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
