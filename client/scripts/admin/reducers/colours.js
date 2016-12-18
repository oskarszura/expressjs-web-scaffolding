const colour = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      return {
        code: action.code,
      };

    default:
      return state;
  }
}

const colours = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      console.log('action add colour zzz', state);
      return [
        ...state,
        colour(undefined, action),
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        colour(t, action)
      )
    default:
      return state;
  }
}

export default colours;
