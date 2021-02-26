import React, { Component } from 'react'
import { withRouter } from 'next/router'

class MovieDetails extends Component {
    render() {
        console.log(this.props.router.query.id)
        return (
            <div className="container">
                <h4>Movie Details</h4>
                <p>{this.props.router.query.id}</p>
            </div>
        )
    }
}

export default withRouter(MovieDetails)
