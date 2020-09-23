/*
Challenge:
Wire up the partially finished travel form so that it works
Remember to use the concept of controlled forms
https://reactjs.org/docs/forms.html

All information should be populating the text below the form in real-time as you are filling it out

This exercise is adapted from the V School curriculum on vanilla JS forms
https://coursework.vschool.io/travel-form

All of our challenges and learning resources are open for the public
to play around with and learn from at https://coursework.vschool.ios
*/

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    console.log("Form submitted")
  }

  handleChange( event ) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>First name: </label>
          <input 
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <label>Last name: </label>
          <input 
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <label>Age: </label>
          <input 
            type="text"
            value={this.state.age > 0 ? this.state.age : ""}
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />

          <label>Gender:
            <input 
              type="radio" 
              name="gender" 
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />Male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />Female
          </label>
          <br />

          <label>Destination:
            <select 
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
              >
              <option value="">Please choose a destination</option>
              <option value="Budapest">Budapest</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </label>
          <br />
          <label>
            <input 
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />Vegan?
          </label>
          <label>
            <input 
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />Kosher?
          </label>
          <label>
            <input 
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />Lactose Free?
          </label>
          <br/>
          <button>Submit</button>
          <hr/>

          <h2>Entered information: </h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age > 0 ? this.state.age : ""}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions: <br/>
            Vegan: {this.state.isVegan ? "Yes" : "No"} <br/>
            Kosher: {this.state.isKosher ? "Yes" : "No"} <br/>
            Lactose free: {this.state.isLactoseFree ? "Yes" : "No"} <br/>
          </p>
        </form>
      </main>
    )
  }
}

export default App;
