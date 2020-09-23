// https://reactjs.org/docs/forms.html

// Formik: create React forms easily

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favouriteColor: "blue",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange( event ) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleSubmit() {
    /*Submit the form to an API here*/
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.firstName} 
          name="firstName" 
          placeholder="First name" 
          onChange={this.handleChange} />
        <br />
        <input 
          type="text" 
          value={this.state.lastName}  
          name="lastName" 
          placeholder="Last name" 
          onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>

        {
          // In JSX textarea is self closing (unlike in HTML)
          // and it's much more like <input />
        }
        <textarea 
          value="Some default value"
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>
        <br />
        <label>
          <input 
            type="radio"
            name="gender"   //Giving the same name to radio buttons ensures that only one can be choosen
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <h2>You are a {this.state.gender}</h2>
        <br />
        <label>Favourite color: </label>
          <select 
            value="favouriteColor"
            onChange={this.handleChange}
            name="favouriteColor"
          >                         {/*The value of this whole element will be whichever of these options the user chooses*/}
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
          </select>
          <h3>Your favourite color is: {this.state.favouriteColor}</h3>
          <button>Submit</button>   {/*In HTML5 buttons (if found within a form) when it is click, they are a Submit button and will fire the onSubmit of the form itself*/}

      </form>
    )
  }
}

export default App;
