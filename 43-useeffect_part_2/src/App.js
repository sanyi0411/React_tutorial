import React, { useState, useEffect } from 'react';
import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0)
  const [answer] = useState("Yes")
  const [color, setColor] = useState("")

  /*
  The side effects, we introduced in useEffect so far, have a thing in common: they don't require any cleanup
  They are all automatically cleaned up when the component unmounts because oit was logic dealing with the component itself
  However some sideeffect won't be cleaned up automatically:
  manual event listeners (document.addEventListener)
  socket subscription (e.g real time chat client)
  etc.

  In this example we will look at setInterval
  It creates a recurring job for JS to run. After unmounting the component the job will continue to run in the background 
  */
  useEffect(() => {
    const intervalId = setInterval(() => {    // setInterval return an id that we can use with clearInterval
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {                // This is how we use useEffect as componentDidUnmount: we provide a function. It will store it, and when
      clearInterval(intervalId)   // a component is about to unmount it will run this function, so that is can do any kind of cleanup
    }
  }, [])        // By giving it an empty array it will run only once. In this case once every second

  useEffect(() => {
    setColor(randomcolor())
  }, [count])                 

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
    </div>
  );
}

export default App;
