import React from 'react';
import { connect } from 'react-redux';
import { addColour } from '../actions';

let AddColour = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          if (!input.value.trim()) {
            return;
          }

          dispatch(addColour(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Colour
        </button>
      </form>
    </div>
  );
}

AddColour = connect()(AddColour)

export default AddColour;
