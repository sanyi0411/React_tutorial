import React from 'react';
import FormComponent from "./FormComponent"

class Form extends React.Component {
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
      <FormComponent
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange}
        {...this.state}
      />

    )
  }
}

export default Form;
