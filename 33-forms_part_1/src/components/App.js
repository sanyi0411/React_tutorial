// https://reactjs.org/docs/forms.html

// In vanillaJS we gatherd all the information from the input boxes
// right at the very last moment, when the user pressed "Submit"
// In React we want to watch for every single change typed into a form box
// For this we can use the 'onChange' function

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange( event ) {
    const {name, value} = event.target  // target is the element is which the event was fired
    this.setState({
      [name]: value   // name represents the element's name property. By enclosing it in [] 'firstName' or 'lastName' will subsituted here
    })
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange} />
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last name" onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App;
