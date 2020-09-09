// Render an App component
// Inside App, render:
//  1. A Navbar component
//  2. A MainContent component
//  3. A Footer component 

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(
    <App />,
    document.getElementById("root")
)