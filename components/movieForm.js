import React, { useState } from 'react'

const MovieForm = ({ genres, onFormSubmit }) => {
    const [movieForm, setMovieForm] = useState({
        name: '', 
        description: '', 
        rating: '', 
        image: '', 
        cover: '', 
        longDesc: ''
    })

    const { name, description, rating, image, cover, longDesc } = movieForm
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setMovieForm({
            ...movieForm,
            [name]: value
        })
    }

    const handleGenreChange = (e) => {
        const { options } = e.target
        let genreValue = []
        for(let i = 0; i < options.length ; i++) {
            const { selected, value } = options[i]
            if(selected) {
                genreValue.push(value)
            }
        }

        setMovieForm({
            ...movieForm,
            genre: genreValue.toString()
        })

        console.log(movieForm)
    }

    const handleSubmit = () => {
        onFormSubmit({...movieForm})
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input name="name" value={name} onChange={handleChange} 
                    type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Some Movie" />
            </div>
            <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input name="description" value={description} onChange={handleChange}
                    type="text" className="form-control" id="description" placeholder="Some Description" />
            </div>
            <div className="mb-3">
                <label htmlFor="rating">Rating</label>
                <input  name="rating" value={rating} onChange={handleChange} 
                    type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="mb-3">
                <label htmlFor="image">Image</label>
                <input name="image" value={image} onChange={handleChange}  
                    type="text" className="form-control" id="image" placeholder="http://....." />
            </div>
            <div className="mb-3">
                <label htmlFor="cover">Cover</label>
                <input name="cover" value={cover} onChange={handleChange} 
                    type="text" className="form-control" id="cover" placeholder="http://......" />
            </div>
            <div className="mb-3">
                <label htmlFor="longDesc">Long Description</label>
                <textarea name="longDesc" value={longDesc} onChange={handleChange}  
                    className="form-control" id="longDesc" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="genre">Genre</label>
                <select onChange={handleGenreChange}  multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
            <button onClick={handleSubmit} type="button" className="btn btn-primary">Create Movie</button>
        </form>
    )
}

export default MovieForm
