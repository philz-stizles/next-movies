import React, { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import { getMovieById } from '../../data/movies'

const MovieDetails = ({ router }) => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchMovie(router.query.id)
    }, [])

    const fetchMovie = async (id) => {
        setLoading(true)
        getMovieById(id, 2000)
            .then(movie => {
                setMovie(movie)
                setLoading(true)
            }).catch(error => {
                console.log(error)
                setError(error.message)
                setLoading(true)
            })
    }

    return (
        <div className="container">
            <h4>Movie Details</h4>
            <p>{router.query.id}</p>
        </div>
    )
}

export default withRouter(MovieDetails)
