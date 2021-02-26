import React, { Fragment } from 'react'
import { createMovie } from '../data/movies-data'
import Modal from './modal'
import MovieForm from './movieForm'

const SideMenu = ({ categories }) => {
    let modal = null

    const handleFormSubmit = async (movie) => {
        const newMovie = await createMovie(movie)
        modal.closeModal()
    }

    return (
        <Fragment>
            <Modal ref={element => modal = element } hasSubmit={false}><MovieForm onFormSubmit={handleFormSubmit} /></Modal>
            <ul className="list-group">
                {
                    categories.map(({ id, name }) => (
                        <li key={id} className="list-group-item">{name}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default SideMenu
