import axios from 'axios';
import { async } from 'q';
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

// action creator for controlled form
export const searchInput = term => async dispatch => {
  dispatch({
    type: 'SEARCH_INPUT',
    payload: term
  });
};

//action creator for searchBar
export const searchTerm = term => async dispatch => {
  const res = axios.get('http://www.omdbapi.com/', {
    params: { s: term, apikey: process.env.development }
  });
  dispatch({
    type: 'SEARCH_TERM',
    payload: term
  });
};

//next action creator below
