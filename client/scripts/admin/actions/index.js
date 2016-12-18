let nextColourId = 0;

export const addColour = (code) => ({
  type: 'ADD_COLOUR',
  id: nextColourId += 1,
  code,
});

export const removeColour = () => ({});
