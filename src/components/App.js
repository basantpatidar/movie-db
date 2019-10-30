import React from 'react';
// import { useSelector} from 'react-redux';
// import { increment, decrement } from '../actions';
import { connect } from 'react-redux';

function App() {
  // const counter = useSelector(state => state.counter);
  // const logged = useSelector(state => state.logged);
  return (
    <div className="App">
      {/* <header className="App-header"> Counter {counter} </header> */}
      {/* <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}

      {/* <h2> {logged ? 'Secured' : ' '} </h2> */}
    </div>
  );
}

export default App;
//export default connect()(App);
