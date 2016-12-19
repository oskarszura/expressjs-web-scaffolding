const colour = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      return {
        id: action.id,
        name: action.name,
        code: action.code,
      };

    default:
      return state;
  }
}

const colours = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      return [
        ...state,
        colour(undefined, action),
      ];
    default:
      return state;
  }
}

export default colours;
