import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

@connect(
  store => ({ colours: store.colours }),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class AddColour extends Component {
  static propTypes = {
    addColour: PropTypes.func.isRequired,
    persistColour: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.onColourNameChange = this.onColourNameChange.bind(this);
    this.onColourValueChange = this.onColourValueChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  onColourNameChange(e) {
    e.preventDefault();
    const isValid = true;
    this.nameInput.classList.toggle('c-admin-colours__colour-name--is-invalid'
      , !isValid);
  }

  onColourValueChange(e) {
    e.preventDefault();
    const isValid = /[0-9A-Fa-f]{6}/g.test(this.valueInput.value);
    this.valueInput.classList.toggle('c-admin-colours__colour-value--is-invalid'
      , !isValid);
    this.codeDiv.style.backgroundColor = `#${this.valueInput.value}`;
  }

  handleOnSubmit(e) {
    e.preventDefault();

    if (!this.valueInput.value.trim()) {
      return;
    }

    const colour = {
      name: this.nameInput.value,
      code: this.valueInput.value,
    };

    this.props.addColour(colour);
    this.props.persistColour(colour);

    this.valueInput.value = '';
    this.nameInput.value = '';
  }

  valueInput;
  nameInput;
  codeDiv;

  render() {
    return (
      <div className="c-admin-colours__adder">
        <form
          onSubmit={this.handleOnSubmit}
        >
          <input
            className="c-admin-colours__colour-name"
            ref={(node) => { this.nameInput = node; }}
            onChange={this.onColourNameChange}
          />

          <div
            className="c-admin-colours__colour-list-code"
            ref={(node) => { this.codeDiv = node; }}
          >
            <input
              type="color"
              className="c-admin-colours__colour-value"
              ref={(node) => { this.valueInput = node; }}
              onChange={this.onColourValueChange}
            />
          </div>

          <button
            className="c-admin-colours__colour-submit"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

