import axios from 'axios';
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
  axios.get('http://www.omdbapi.com/', {
    params: { s: term, apikey: process.env.development }
  });
  return {
    type: 'SEARCH_INPUT',
    payload: term
  };
};
