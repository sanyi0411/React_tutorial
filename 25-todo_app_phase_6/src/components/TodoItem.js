import React from "react"
import "./TodoItem.css"

class TodoItem extends React.Component {
   
    render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={this.props.completed}
                    onChange={() => this.props.handleChange(this.props.todo.id)}
                />
                <p style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>{this.props.todo.text}</p>
            </div>
        )

    }
}

export default TodoItem