import React from 'react';
import './App.css';

//READ: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    // You were just born
    // This component did just mount to the screen
    // The very first time a components shows up, React will run this method
    // This method is only run one while the component is showing up on the screen
    // Most common use case: run an API call to get data from external source
  }

  UNSAFE_componentWillReceiveProps( nextProps ) {
    // Deprecated. Totally removed in version 17
    // Every time a component receives props from a parent component, this method will run
    // It will run when a parent component changes the props passing down to the child component
    // You can check if the new props are different at all from the existing one:
    // if( nextProps.myProp !== this.props.myProp ) { do something important }
  }

  shouldComponentUpdate( nextProps, nextState ) {
    // Whether you need to change your clothes at all
    // Sometimes React will re-render a component even if nothing has changed
    // This can be very expensive
    // return true if want to update
    // return false if don't want to update
  }

  componentWillUnmount() {
    // This will be called when a component unmounts=disappears from the screen
    // Cleanup or teardown
    // Most common use case: if the component set up an event listener,
    // remove that event listener here 
  }

  render() {
    // It's job is to decide what gets rendered to the screen
    // Any time state or props change, React may run this method again
    return (
      <div>
  
      </div>
    )
  }
}

export default App;
