import React from "react"

class Conditional extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        if( this.props.isLoading ) {
            return (
                <h1>Please wait while the page is loading</h1>
            )
        }
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
        /*
        return (
            <div>
                {this.props.isLoading ? <h1>Please wait while the page is loading</h1> : <h1>Hello</h1>}
            </div>
        )
        */
    }
}

export default Conditional