import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

@connect(
  state => ({ generator: state.generator.generator }),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class App extends Component {
  static propTypes = {
    generate: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.generate();
  }

  render() {
    return (<div>
      <h2>Generator</h2>
      <button
        onClick={this.handleButtonClick}
      >
        Generate
      </button>
    </div>);
  }
}

