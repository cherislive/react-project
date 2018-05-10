import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeItem from './item';

class Home extends Component {
  componentWillMount() {
  }
  render() {
    const _MATCH = this.props.match
    return (
      <div>
        <div className="wrapper mod-components">
          <div className="container">
            <p>HOME</p>
            <div className="mod-components mod-panel">            
              <Switch>
                <Route exact path="/" component={HomeItem} />
                <Route path={`${_MATCH.path}:name`} component={HomeItem} />
                <Redirect from={`${_MATCH.path}`} to={`${_MATCH.path}/`} component={HomeItem} />
              </Switch>
            </div>
          </div>       
        </div>
      </div>
    );
  }
}

export default Home;
