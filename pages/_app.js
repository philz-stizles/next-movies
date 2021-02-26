import App from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

// Use _app to setup layout for your application
// The default component inside _app will take the routed Component as props
class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props
    // Component holds page you are navigating to
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <style jsx>{`
  
        `}
        </style>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </div>
    )
  }
}

export default MainApp
