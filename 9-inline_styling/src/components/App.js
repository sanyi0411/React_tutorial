import React from "react"

function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const anotherStyle = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning";
        anotherStyle.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        anotherStyle.color = "#8914A3"
    } else {
        timeOfDay = "night"
        anotherStyle.color = "#D90000"
    }

    const styles = {
        color: "#123456",
        backgroundColor: "green",
        fontSize: 18        // If you only put a number here, the default will be pixels
    }

    return (
        <div>
            <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D08"}}>Good {timeOfDay}</h1>
            <h2 style={styles}>How are you?</h2>
            <h2 style={anotherStyle}>This is a dynamically styled line</h2>
        </div>
    )
}

export default App
