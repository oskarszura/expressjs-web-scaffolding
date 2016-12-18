import React from 'react';
import { connect } from 'react-redux';
import { addColour } from '../actions';

const AddColour = connect()(({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addColour(input.value));
          input.value = '';
        }}
      >
        <input
          className="c-admin__colour-value"
          ref={(node) => {
            input = node;
          }}
          onChange={(e) => {
            e.preventDefault();
            const isValid = /[0-9A-Fa-f]{6}/g.test(input.value);
            input.classList.toggle('c-admin__colour-value--is-invalid'
            , !isValid);
          }}
        />
        <button type="submit">
          Add Colour
        </button>
      </form>
    </div>
  );
});

export default AddColour;
