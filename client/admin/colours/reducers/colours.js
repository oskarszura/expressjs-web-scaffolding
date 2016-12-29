const colour = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      return {
        _id: action._id,
        name: action.name,
        code: action.code,
      };

    default:
      return state;
  }
};

const colours = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      return [
        ...state,
        colour(undefined, {
          type: action.type,
          _id: action._id,
          name: action.name,
          code: action.code,
        }),
      ];
    case 'REMOVE_COLOUR':
      return state.filter(colour => colour._id !== action._id);
    case 'LOADED_COLOURS':
      return action.colours;
    default:
      return state;
  }
};

export default colours;
