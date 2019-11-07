import React from 'react';
import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function App() {
  return (
    <div className="App">
      <MovieSearch />
    </div>
  );
}

export default connect()(App);
