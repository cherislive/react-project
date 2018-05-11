import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dialog from '@/components/dialog';
import HomeItem from './item';

class Home extends Component {
  componentWillMount() { // 组件挂载开始之前
   
  }
  handleAlert () {
    Dialog.alert('Dialog.alert()', {
      title: '12',
      okText: 'Yes',
      shown: () => {
        console.log('ASA')
      }
    });
  }
  handleConfirm () {
    Dialog.confirm('Dialog.confirm()', {
      title: '12',
      okText: 'Yes',
      cancelText: 'No',
      shown: () => {
        console.log('confirm')
      }
    });
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
              <div className="mod-components">
                <button className="ui-btn" onClick={this.handleAlert.bind(this)}>Alert</button>
                <button className="ui-btn" onClick={this.handleConfirm.bind(this)}>confirm</button>
              </div>
            </div>
          </div>       
        </div>
      </div>
    );
  }
}

export default Home;
