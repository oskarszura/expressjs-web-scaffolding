import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ColourList from './ColourList';
import AddColour from './AddColour';
import * as actions from '../actions';

@connect(
  () => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class App extends Component {
  static propTypes = {
    loadColours: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadColours();
  }

  render() {
    return (<div className="admin-colours">
      <h3 className="admin-colours__header">
        Colour Manager
      </h3>
      <ColourList />
      <AddColour />
    </div>);
  }
};
