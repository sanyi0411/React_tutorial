/*
Challenge:
Given a stateless functional component:
1. Follow the steps needed to add a state to it
2. Have state keep track of wether the user is logged in or out
3. Add a button that logs the in/out
  a. Extra challenge: make the button display "log in" if they are logged out and vice versa
4. Display text that says "logged in" if the user is logged in, or "logged out" if they are not
*/
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
      <div>
        <h1>{displayText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default App;
