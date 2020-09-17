/*
In TodoItem we have a warning saying "there is checked prop on the <input> element but there is no way to change that"
Get rid of this warning by adding an onChange to our input
For now it can console.log something
*/
import React from "react"
import TodoItem from "./TodoItem"
import todoData from "../todoData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoComponents = this.state.todos.map((item) => {
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
}

export default App