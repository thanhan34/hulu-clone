import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import FlipMove from 'react-flip-move'
import axios from 'axios'

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
        }
        fetchData()
    }, [selectedOption])
    // console.log(movies)
    return (
        <div className="results">
            <FlipMove>
                {
                    movies.map((movie) => (
                        <VideoCard key={movie.id} movie={movie} />
                    ))
                }
            </FlipMove>
        </div>
    )
}

export default Results
