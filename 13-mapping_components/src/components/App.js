import React from "react"
import Joke from "./Joke"
import jokes from "../data/jokes"

function App() {
    const jokeComponents = jokes.map(joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
        )
    })

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App
