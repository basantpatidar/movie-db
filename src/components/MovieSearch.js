import React from 'react';
import SelectedMovie from './SelectedMovie';
import * as actions from '../actions';
import { connect } from 'react-redux';
// import {searchInput} from '../actions'
class MovieSearch extends React.Component {
  state = { movieName: 'Clicked' };

  handleClick = evt => this.setState({ [evt.target.name]: evt.target.value });

  render() {
    console.log(actions);
    return (
      <div>
        <input
          type="text"
          name="movieName"
          value={this.state.movieName}
          onChange={this.onChange}
        ></input>
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

//Controlled input
//When clicked submit a alert box
