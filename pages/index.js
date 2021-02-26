import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { SideMenu } from '../components/sideMenu'
import { Carousel } from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies } from '../data/movies'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    setLoading(true)
    getMovies(2000)
      .then(movies => {
        setMovies(movies)
        setLoading(true)
      }).catch(error => {
        console.log(error)
        setError(error.message)
        setLoading(true)
      })
  }

  return (
      <main className={styles.main}>
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <SideMenu />
            </div>

            <div className="col-lg-9">
              <div className="row"><Carousel /></div>
              { 
                error 
                ? <div className="alert alert-danger text-center" role="alert">{error}</div> 
                : <div className="row"><MovieList movies={movies} /></div>
              }
            </div>

          </div>
        </div>
      </main>
  )
}

export default Home