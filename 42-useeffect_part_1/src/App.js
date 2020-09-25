// The useEffect method is considered a replacement for 3 lifecycle methods:
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// useEffect is a hook the allows us to produce side effects in our component
// Side effect is anything that reaches outside the component to do something
// e.g: a network request, or DOM manipulation or setting up event listeners manually or timeouts

import React, { useState, useEffect } from 'react';
import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0)
  const [answer] = useState("Yes")
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {           // The infinite loop, mentioned in the previous chapter, is such a commmon thing
    setColor(randomcolor())   // that useEffect is prepared for this: we can a provide a 2nd parameter, an array
  }, [count])                 // of variables, which specifies what variables I want to watch for changes in

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>

      <button onClick={increment}>Increment!</button>

      <br/>

      <button onClick={decrement}>Decrement!</button>

    </div>
  );
}

export default App;
