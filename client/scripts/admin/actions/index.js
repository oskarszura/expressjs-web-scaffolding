let nextColourId = 0;

export const addColour = (code) => {
  const id = nextColourId += 1;
  const type = 'ADD_COLOUR';

  return { type, id, code };
};

export const removeColour = () => ({});
