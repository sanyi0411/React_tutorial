import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  static getDerivedStateFromProp( props, state ) {
    // returns the new, updated state based upon the props
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-dervied-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
    // https://reactjs.org/blog/react-component.html#getsnapshotbeforeupdate
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
