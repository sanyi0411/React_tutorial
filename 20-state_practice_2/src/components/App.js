// Given a stateless functional component, add a state to it
// State should have a property called 'isLoggedIn' which is a boolean
// Then give your best shot at rendering the world "in" if the user is logged in
// or "out" if the user is logged out

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        let wordDisplay
        if( this.state.isLoggedIn ) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App