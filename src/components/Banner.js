import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './banner.css'

const base_URL = "https://image.tmdb.org/t/p/original"

function Banner() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request
        }
        fetchData()
    },[])

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_URL}${movies?.backdrop_path})`,
                    backgroundPosition: "center center",
                }}
            >

            <div className="banner__content">

            <h2 className="banner__title"> {movies?.title || movies?.name || movies?.original_name} </h2>
            <div className="banner__buttons">
            <button> Play </button>
            <button> Add </button>
            </div>
            <p className="banner__desc"> {truncate(movies?.overview, 150)} </p>
            
            </div>

            <div className="banner__fadebottom">

            </div>
        </header>
    )
}

export default Banner
