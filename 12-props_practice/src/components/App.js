import React from "react"
import Joke from "./Joke"
import jokes from "../data/jokes"

function App() {
    return (
        <div>
            <Joke 
                question={jokes[0].question}
                punchline={jokes[0].punchline}
            />
            <Joke 
                question={jokes[1].question}
                punchline={jokes[1].punchline}
            />
            <Joke 
                question={jokes[2].question}
                punchline={jokes[2].punchline}
            />
            <Joke 
                question={jokes[3].question}
                punchline={jokes[3].punchline}
            />
        </div>
    )
}

export default App
