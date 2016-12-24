const $ = require('jquery');

export const addColour = ({ name, code }) => {
  const type = 'ADD_COLOUR';

  return { type, name, code };
};

export const removeColour = () => ({});

export const persistColour = colour => () => {
  $.post('/api/colour', colour, () => {
    console.log('store persisted');
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
