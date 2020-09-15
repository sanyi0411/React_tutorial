import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Bob",
        }
    }

    render() {
        return (
            <div>
                Hello {this.state.name}!
            </div>
        )
    }
}

export default App