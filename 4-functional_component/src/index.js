// 1. Create a functional component called MyInfo that returns the following UI:
//      An h1 with your name
//      A paragraph with a little bit about yourself
//      An ordered or unordered list about the top 3 vacation spots you'd like to visit
// 2. Render an instance of that functional component to the browser
// +1. Google how you can add style to it 

import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return (
        <ul>
            <li>1</li>            
            <li>2</li>            
            <li>3</li>            
        </ul>
    )
}

function MyInfo() {
    return (
        <div>
            <h1>Sandor DERDA</h1>        
            <p>I am who I am</p>
            <ul>
                <li>Iceland</li>
                <li>Japan</li>
                <li>Cuba</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <MyInfo />,
    document.getElementById("root")
)