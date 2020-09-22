/*
Challenge: Style the completed todo items differently from the incomplete items
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