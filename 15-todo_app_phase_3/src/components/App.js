// Create a separate file for the Todo data (normally it would come from an API)
// Use the array.map() method, render a child component for each Todo item
// and pass the relevant data to is

import React from "react"
import TodoItem from "./TodoItem"
import todoData from "../todoData"

function App() {
    const todoComponents = todoData.map((item) => {
        return (
            <TodoItem key={item.id} todo={item}/>
        )
    })

    return (
        <div className="todo-list">
            {todoComponents}
        </div>
    )
}

export default App