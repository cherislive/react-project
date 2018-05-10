import React, { Component } from "react";
import PropTypes from 'prop-types';
// import axios from 'axios';
// const CancelToken = axios.CancelToken;
// const SOURCE = CancelToken.source();
// SOURCE.cancel('这里你可以输出一些信息，可以在catch中拿到');

class Loading extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.any
  }
  constructor(props) {
    super()
    console.log('Loading ...', props)
  }
  componentWillMount(props) {
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
  }
  render() {
    return (
      <div className="mod-loading text-muted">{this.props.isLoading ? 'Loading...' : 'Sorry, there was a problem loading the page.'}</div>
    )
  }
}
export default Loading