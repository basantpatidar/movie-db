import React from 'react';
import SelectedMovie from './SelectedMovie';
class MovieSearch extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="MovieName"></input>
        <SelectedMovie />
      </div>
    );
  }
}
export default MovieSearch;
