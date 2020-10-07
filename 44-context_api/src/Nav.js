import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>John Doe's</h3>
            <p>List of movies: {movies.length}</p>
        </div>
    )
}
