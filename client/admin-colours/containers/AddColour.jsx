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
    this.nameInput.classList.toggle('colour-adder__name--is-invalid'
      , !isValid);
  }

  onColourValueChange(e) {
    e.preventDefault();
    const isValid = /[0-9A-Fa-f]{6}/g.test(this.valueInput.value);
    this.valueInput.classList.toggle('colour-adder__value--is-invalid'
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
      variableName: this.variableNameInput.value,
      code: this.valueInput.value,
    };

    this.props.persistColour(colour);

    this.valueInput.value = '';
    this.variableNameInput = '';
    this.nameInput.value = '';
  }

  valueInput;
  nameInput;
  variableNameInput;
  codeDiv;

  render() {
    return (
      <div className="colour-adder">
        <form
          onSubmit={this.handleOnSubmit}
        >
          <input
            className="colour-adder__name"
            ref={(node) => { this.nameInput = node; }}
            placeholder="Colour name"
            onChange={this.onColourNameChange}
          />

          <input
            className="colour-adder__variable-name"
            ref={(node) => { this.variableNameInput = node; }}
            placeholder="Colour variable name"
          />

          <div
            className="colour-adder__code"
            ref={(node) => { this.codeDiv = node; }}
          >
            <input
              type="color"
              className="colour-adder__value"
              ref={(node) => { this.valueInput = node; }}
              onChange={this.onColourValueChange}
            />
          </div>

          <button
            className="colour-adder__submit"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

