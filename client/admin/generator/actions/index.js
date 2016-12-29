const $ = require('jquery');

export const generated = () => {
  const type = 'GENERATED';
  return { type };
};

export const generating = () => {
  const type = 'GENERATING';
  return { type };
};

export const generate = () => (dispatch) => {
  $.get('/admin/generate', () => {
    dispatch(generated());
  });
  dispatch(generating());
};
