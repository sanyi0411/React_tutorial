import React from 'react';
import './App.css';
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ]
    }
  }

  // logical and: &&
  // Usually refers to something on the left and something on the right,
  // whether the entire conditional should be considered true or false.
  // Under the hood: JS is determining the "truthiness" of the left side.
  // If that is true, it immediately return the thing on the right.
  // if the thing on the left is false it returns false.
  // So the && operator can be used to conditionally render if something is true or render
  // nothing if it's false

  render() {
    // If there are unread messages it renders the <h2> otherwise it renders nothing
    return (
      <div>
        {
          this.state.unreadMessages.length > 0 &&
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        }
      </div>
    )
  }
}

export default App;
