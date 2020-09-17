import React from 'react';

function handleClick() {
  alert("clicked")
}

function App() {
  return (
    <div>
      <img onMouseOver={() => console.log("hovered")} src="https://www.fillmurray.com/200/200" />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
