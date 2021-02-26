import styles from '../styles/Home.module.css'
import { SideMenu } from '../components/sideMenu'
import { Carousel } from '../components/carousel'
import MovieList from '../components/movieList'
import { getMovies } from '../data/movies'

import React, { Component } from 'react'

class Home extends Component {
  state = {
    movies: [],
    isLoading: false,
    errror: null
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    getMovies(2000)
      .then(movies => {
        this.setState({
          movies,
          isLoading: false
        })
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        })
      })
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true })
  //   try {
  //     const movies = await getMovies(2000)
  //     this.setState({
  //       movies,
  //       isLoading: false
  //     })
  //   } catch (error) {
  //     this.setState({
  //       error,
  //       isLoading: false
  //     })
  //   }
  // }

  render() {
    const { movies, isLoading, error } = this.state

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
}

export default Home