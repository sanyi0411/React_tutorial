// https://scrimba.com/g/greacthooks

import React from 'react';
import './App.css';
import randomcolor from "randomcolor"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: ""
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount() {
    console.log("Mount")
  }

  componentDidUpdate( prevProps, prevState ) {
    console.log("Did update")
    if( prevState.count !== this.state.count ) {    //Otherwise changing the color would trigger the render() and therfore the componentDidUpdate() method again
      const newColor = randomcolor()
      this.setState({
        color: newColor
      })
    }
  }

  render() {
    console.log("Render")
    return (
      <div>
        <h1 style={{color: this.state.color}}>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App;
