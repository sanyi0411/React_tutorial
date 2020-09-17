/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file
and mapped over it to display the todo items.

Eventually we will want to be able to modify the data which will only happen if we've "loaded"
the data in to the component's state.

Challenge: Change the <App /> component into a stateful class component
and load the imported 'todosData' into state.
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