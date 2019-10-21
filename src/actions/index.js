// export const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };
// export const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };

export const searchInput = term => {
  return {
    type: 'SEARCH_INPUT',
    payload: term
  };
};
