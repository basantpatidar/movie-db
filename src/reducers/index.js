import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import searchInput from './searchInput';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
  searchInput: searchInput
});

export default allReducers;
