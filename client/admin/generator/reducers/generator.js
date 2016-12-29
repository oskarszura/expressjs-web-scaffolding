const generator = (state = {}, action) => {
  switch (action.type) {
    case 'GENERATING':
      return Object.assign({}, state, {
        generated: false,
        generating: true,
      });
    case 'GENERATED':
      return Object.assign({}, state, {
        generated: true,
        generating: false,
      });
    default:
      return state;
  }
};

export default generator;
