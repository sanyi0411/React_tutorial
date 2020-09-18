import React from 'react';
import '../index.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,  //Do not use "prevState.count++" !!
      }
    })
  }

  render() {
    return (
      <div id="app">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App;
