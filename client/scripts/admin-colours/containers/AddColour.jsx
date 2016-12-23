import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

let nameInput;
let valueInput;
let codeDiv;

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)
export default class AddColour extends Component {
  constructor(props) {
    super(props);
    this.onColourNameChange = this.onColourNameChange.bind(this);
    this.onColourValueChange = this.onColourValueChange.bind(this);
  }

  onColourNameChange(e) {
    e.preventDefault();
    const isValid = /[0-9A-Fa-f]{6}/g.test(nameInput.value);
    nameInput.classList.toggle('c-admin-colours__colour-name--is-invalid'
      , !isValid);
  };

  onColourValueChange(e) {
    e.preventDefault();
    const isValid = /[0-9A-Fa-f]{6}/g.test(valueInput.value);
    valueInput.classList.toggle('c-admin-colours__colour-value--is-invalid'
      , !isValid);
    codeDiv.style.backgroundColor = `#${valueInput.value}`;
  };


  render() {
    const { dispatch } = this.props;

    return (
      <div className="c-admin-colours__adder">
        <form
          onSubmit={(e) => {
        e.preventDefault();

        if (!valueInput.value.trim()) {
          return;
        }

        dispatch(this.props.addColour({
          name: nameInput.value,
          code: valueInput.value,
        }));
        valueInput.value = '';
      }}
        >
          <input
            className="c-admin-colours__colour-name"
            ref={(node) => { nameInput = node; }}
            onChange={this.onColourNameChange}
          />

          <div
            className="c-admin-colours__colour-list-code"
            ref={(node) => { codeDiv = node; }}
          >
            <input
              className="c-admin-colours__colour-value"
              ref={(node) => { valueInput = node; }}
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

