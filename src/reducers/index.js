import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import searchInput from './searchInput';
import controlledSearchReducer from './searchTerm';

//using combineReducer
const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
  searchInput,
  searchTerm: controlledSearchReducer
});

export default allReducers;
