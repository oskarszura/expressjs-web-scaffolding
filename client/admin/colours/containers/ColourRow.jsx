import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

@connect(
  () => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class ColourRow extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    removeColour: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick() {
    this.props.removeColour(this.props._id);
  }

  render() {
    const style = {
      backgroundColor: this.props.code,
    };

    return (<li
      className="colour-list__item"
    >
      <div className="colour-list__name">
        {this.props.name}
      </div>
      <div
        className="colour-list__code"
        style={style}
      >
        {this.props.code}

        <div className="tool-tip">
          <ul className="small-list">
            <li
              className="small-list__item"
              onClick={this.handleRemoveClick}
            >
              Edit
            </li>
            <li
              className="small-list__item"
              onClick={this.handleRemoveClick}
            >
              Remove
            </li>
          </ul>

        </div>
      </div>
    </li>);
  }
}

