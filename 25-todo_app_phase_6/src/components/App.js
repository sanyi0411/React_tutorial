/*
Let's make it so our checkbox can actually mark our todo as complete or incomplete.
This challenge is a little more involved than some of the past ones.

Challenge:
Create an event handler in the App component for when the checkbox is clicked
(which is an 'onChange' event)
Pass the method down to the TodoItem component
In the TodoItem component, make it so when the 'onChange' event happens, it calls the 
'handleChange' method and passes the id of the todo into the function
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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange( id ) {
      this.setState(prevState => {
        const updatedTodo = prevState.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todo: updatedTodo
        }
      })
    }

    render() {
        const todoComponents = this.state.todos.map((item) => {
            return (
                <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>
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