import React from 'react'

export const Carousel = ({ images }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                {
                    images.map((item, index) => {
                        const { id } = item
                        return (
                            <li key={id} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                        )
                    })
                }
            </ol>
            <div className="carousel-inner">
                {
                    images.map((item, index) => {
                        const { id, url, name } = item
                        return (
                            <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={url} className="d-block w-100" alt={name} />
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
            <style jsx>{`
                .carousel-inner{
                    max-height: 400px;
                }
            `}</style>
        </div>
    )
}
