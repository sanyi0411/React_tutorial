import React from "react"

class Greeting extends React.Component {
    timeOfDay;

    getProperGreeting() {
        const date = new Date()
        const hours = date.getHours()

        if (hours < 12) {
            this.timeOfDay = "morning"
        } else if (hours < 17) {
            this.timeOfDay = "afternoon"
        } else {
            this.timeOfDay = "evening"
        }
    }
    
    render() {
        this.getProperGreeting();
        return (
            <div>
                Good {this.timeOfDay} {this.props.username}:)
            </div>
        )
    }
}

export default Greeting