import React from "react"

class TodoItem extends React.Component {
    itemChanged() {
        console.log("checked")
    }
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" onChange={ this.itemChanged }></input>
                <p>{this.props.todo.text}</p>
            </div>
        )

    }
}

export default TodoItem