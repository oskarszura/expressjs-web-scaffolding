import React from 'react';
import { connect } from 'react-redux';
import { addColour } from '../actions';

let nameInput;
let valueInput;
let codeDiv;

const onColourNameChange = (e) => {
  e.preventDefault();
  const isValid = /[0-9A-Fa-f]{6}/g.test(nameInput.value);
  nameInput.classList.toggle('c-admin-colours__colour-name--is-invalid'
    , !isValid);
};

const onColourValueChange = (e) => {
  e.preventDefault();
  const isValid = /[0-9A-Fa-f]{6}/g.test(valueInput.value);
  valueInput.classList.toggle('c-admin-colours__colour-value--is-invalid'
    , !isValid);
  codeDiv.style.backgroundColor = `#${valueInput.value}`;
};

const AddColour = connect()(({ dispatch }) => {
  return (
    <div className="c-admin-colours__adder">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!valueInput.value.trim()) {
            return;
          }

          dispatch(addColour({
            name: nameInput.value,
            code: valueInput.value,
          }));
          valueInput.value = '';
        }}
      >
        <input
          className="c-admin-colours__colour-name"
          ref={(node) => { nameInput = node; }}
          onChange={onColourNameChange}
        />

        <div
          className="c-admin-colours__colour-list-code"
          ref={(node) => { codeDiv = node; }}
        >
          <input
            className="c-admin-colours__colour-value"
            ref={(node) => { valueInput = node; }}
            onChange={onColourValueChange}
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
});

export default AddColour;
