import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'

const base_URL = "https://image.tmdb.org/t/p/original"

function Banner({title, desc}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            console.log(movies)
        }
        fetchData()
    })

    return (
        <header className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${base_URL}${movies?.backdrop__path})`
                }}
            >

            <div className="banner__content">

            <h2> {movies?.title || movies?.name || movies?.original_name} </h2>
            <div className="buttons">
            <button> Play </button>
            <button> Add </button>
            </div>
            <p> {desc} </p>

            </div>
        </header>
    )
}

export default Banner
