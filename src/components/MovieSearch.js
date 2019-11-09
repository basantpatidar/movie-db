import React from 'react';
import SelectedMovie from './SelectedMovie';
import * as actions from '../actions';
import { connect } from 'react-redux';
class MovieSearch extends React.Component {
  render() {
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
  return { term: state.searchTerm };
};
export default connect(
  mapStateToProps,
  actions
)(MovieSearch);
