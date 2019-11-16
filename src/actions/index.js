import axios from 'axios';

// action creator for controlled form
export const searchInput = term => dispatch => {
  dispatch({
    type: 'SEARCH_INPUT',
    payload: term
  });
};

//action creator for searchBar
//API saved in processEnvDev
export const searchTerm = term => async dispatch => {
  const res = await axios.get('http://www.omdbapi.com/', {
    params: { s: term, apikey: process.env.development }
  });
  console.log(res);

  dispatch({
    type: 'SEARCH_TERM',
    payload: res
  });
};

//next action creator below
