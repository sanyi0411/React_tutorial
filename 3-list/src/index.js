// Render an unordered list to the page.
// The list should contain 3 list items with anything in them you want

// HINTS:
// Import the libraries  you need first
// use one of the libraries to render some JSX to the page 

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>,
    document.getElementById("root")
)