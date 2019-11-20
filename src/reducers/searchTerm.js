const initState = {
  movies: []
};
const controlledSearchReducer = (state = initState, action) => {
  if (action.type === 'SUBMIT') {
    return { ...state, movies: action.payload };
  }
  return state;
};

export default controlledSearchReducer;
