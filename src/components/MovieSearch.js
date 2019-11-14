import React from 'react';
import SelectedMovie from './SelectedMovie';
import * as actions from '../actions';
import { connect } from 'react-redux';
// import {searchInput} from '../actions'
class MovieSearch extends React.Component {
  render() {
    console.log(actions);
    return (
      <div>
        <input type="text" name="MovieName"></input>
        <button>Submit</button>
        <SelectedMovie />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);

  return { term: state.searchTerm };
};
export default connect(
  mapStateToProps,
  actions
)(MovieSearch);
