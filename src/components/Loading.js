import React, { Component } from "react";
import PropTypes from 'prop-types'

class Loading extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.any
  }
  constructor(props) {
    super()
    console.log('AAA', props.isLoading, props.error)
  }
  componentWillMount(props) {
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
  }
  render() {
    return (
      <div>{this.props.isLoading ? 'Loading...' : 'Sorry, there was a problem loading the page.'}</div>
    )
  }
}
export default Loading