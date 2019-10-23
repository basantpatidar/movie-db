import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import searchInput from './searchInput';
import searchTerm from './searchTerm';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
  searchInput: searchInput,
  searchTerm: searchTerm
});

export default allReducers;
