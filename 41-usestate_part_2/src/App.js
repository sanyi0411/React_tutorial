// Convert class below to a functional component that uses the useState hook
// to initialize a count variable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count yet.

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [asnwer] = useState("Yes")  // You can use multiple versions of state

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      {
      // version1:
      // <button onClick={() => setCount(prevCount => prevCount + 1)}>Change!</button>
      // The function that changes state can either receive a completely new version of state
      // or I can provide it a function that receives the previous version of state 
      }
      {
      // version2:
      }
      <button onClick={increment}>Increment!</button>

      <br/>

      <button onClick={decrement}>Decrement!</button>

    </div>
  );
}

export default App;
