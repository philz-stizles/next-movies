import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import SideMenu from '../components/sideMenu'
import { Carousel } from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies } from '../data/movies-data'
import { getCategories } from '../data/categories-data'

const Home = ({ images, movies, categories }) => {
  return (
      <main className={styles.main}>
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <SideMenu categories={categories} />
            </div>

            <div className="col-lg-9">
              <div className="row"><Carousel images={images} /></div> 
                <div className="row"><MovieList movies={movies} /></div>
            </div>

          </div>
        </div>
      </main>
  )
}

Home.getInitialProps = async () => {
    const movies = await getMovies(0)
    const images = movies.map(({ id, name, cover }) => {
      return { id: `image-${id}`, url: cover, name }
    })
    const categories = await getCategories(0)
    return { images, movies, categories }
}

export default Home