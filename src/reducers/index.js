import { combineReducers } from 'redux';
import searchInput from './searchInput';
// import controlledSearchReducer from './searchTerm';

//using combineReducer
const allReducers = combineReducers({
  searchInput
  // searchTerm: controlledSearchReducer
});

export default allReducers;
