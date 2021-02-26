import React, { Component } from 'react'
import Link from 'next/link'
import { shorten } from '../utils/textUtils'

const MovieList = ({ movies }) => {

    const renderMovies = (movies) => {
        return movies.map(({ id, image, name, description, rating }) => (
            <div className="col" key={id}>
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><Link href={`movies/${id}`}><a>{name}</a></Link></h5>
                        <p className="card-text">{shorten(description, 150)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{rating}</small>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                renderMovies(movies)
            }
        </div>
    )
}

export default MovieList