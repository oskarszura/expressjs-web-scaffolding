const $ = require('jquery');

export const addColour = ({ _id, name, variableName, code }) => {
  const type = 'ADD_COLOUR';
  return { type, _id, name, variableName, code };
};

export const deleteColour = (_id) => {
  const type = 'REMOVE_COLOUR';
  return { type, _id };
};

export const removeColour = colourId => (dispatch) => {
  $.ajax({
    url: `/api/colour/${colourId}`,
    type: 'DELETE',
    success: () => { dispatch(deleteColour(colourId)); },
  });
};

export const persistColour = colour => dispatch => {
  $.post('/api/colour', colour, (data) => {
    const addedColour = {
      _id: data.model._id,
      name: data.model.name,
      variableName: data.model.variableName,
      code: data.model.code,
    };

    dispatch(addColour(addedColour));
  });
};

export const loadedColours = colours => ({
  type: 'LOADED_COLOURS',
  colours: colours,
});

export const loadColours = () => (dispatch) => {
  $.get('/api/colour', (colours) => {
    dispatch(loadedColours(colours));
  });
};
