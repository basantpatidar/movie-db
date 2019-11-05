import React from 'react';
import SelectedMovie from './SelectedMovie';
import * as actions from '../action';
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
export default connect(
  null,
  actions
)(MovieSearch);
