import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

@connect(
  () => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class AddColour extends Component {
  static propTypes = {
    addColour: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.onColourNameChange = this.onColourNameChange.bind(this);
    this.onColourValueChange = this.onColourValueChange.bind(this);
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

  valueInput;
  nameInput;
  codeDiv;

  render() {
    return (
      <div className="c-admin-colours__adder">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!this.valueInput.value.trim()) {
              return;
            }

            this.props.addColour({
              name: this.nameInput.value,
              code: this.valueInput.value,
            });
            this.valueInput.value = '';
          }}
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

