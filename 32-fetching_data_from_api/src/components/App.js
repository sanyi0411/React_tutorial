// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

// Star Wars API:
// https://swapi.co/

// Promises:
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        loading: true,
        character: prevState.character
      }
    })
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App;
