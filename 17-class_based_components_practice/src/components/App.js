import React from "react"
import Header from "./Header"
import Greeting from "./Greeting"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Greeting username="Bob"/>
            </div>
        )
    }
}

export default App