export const addColour = ({ name, code }) => {
  const type = 'ADD_COLOUR';

  return { type, name, code };
};

export const removeColour = () => ({});
