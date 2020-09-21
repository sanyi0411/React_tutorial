import React from 'react';
import './App.css';
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // This part fakes an API call:
    // It is like it takes 1.5sec to get a response from an API
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  // When we "get the data from the API" (timeout is over)
  // isLoading will change to false because we finished loading
  // So the render() method will run again beacuse something changed
  render() {
    return (
      // Best way to do it is if App is in charge of determining whether to render <Conditional/> or not
      // So the conditinal part from the child component should move here 
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App;
