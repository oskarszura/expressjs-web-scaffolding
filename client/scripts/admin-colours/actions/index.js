let nextColourId = 0;

export const addColour = ({ name, code }) => {
  const id = nextColourId += 1;
  const type = 'ADD_COLOUR';

  return { type, id, name, code };
};

export const removeColour = () => ({});
