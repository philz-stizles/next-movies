import { useRouter } from 'next/router'
import { getMovieById } from '../../data/movies-data'

const MovieDetails = ({ movie }) => {
    const { id, name, description } = movie
    return (
        <div className="container">
            <h4>Movie Details</h4>
            <p>{name}</p>
        </div>
    )
}

MovieDetails.getInitialProps = async (context) => {
    try {
        const movie = await getMovieById(context.query.id, 2000)
        return { movie, error: null }
    } catch (error) {
        return { movie: null, error: error.message }
    }
}

export default MovieDetails
