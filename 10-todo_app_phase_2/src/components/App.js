// Change the input/p comba from the previous task
// to be a new component called TodoItem
// Style up the page however you like

import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App