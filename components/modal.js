import React, { Component } from 'react'
import { render } from 'react-dom'

class Modal extends Component {
    constructor(props) {
        super(props)

        this.closeButton = null
    }

    closeModal = () => {
        this.closeButton.click()
    }

    handleSubmitModal = () => {
        this.closeModal()
    }

    render() {
        const { children, hasSubmit } = this.props
        return (
            <div className="create-movie-modal">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Movie</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button ref={(element) => this.closeButton = element}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {hasSubmit && 
                                <button onClick={this.handleSubmitModal} type="button" className="btn btn-primary">Save changes</button>
                            }
                        </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .create-movie-modal {
                        margin: 0 0 1rem 0;
                    }
                
                `}</style>
            </div>
        )
    }
}

// const Modal = ({ children, hasSubmit }) => {
//     let closeButton = null

//     const handleSubmitModal = () => {
//         closeButton.click()
//     }

//     return (
//         <div className="create-movie-modal">
//             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Movie</button>
//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                         {children}
//                     </div>
//                     <div className="modal-footer">
//                         <button ref={(element) => closeButton = element}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                         {hasSubmit && 
//                             <button onClick={handleSubmitModal} type="button" className="btn btn-primary">Save changes</button>
//                         }
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             <style jsx>{`
//                 .create-movie-modal {
//                     margin: 0 0 1rem 0;
//                 }
            
//             `}</style>
//         </div>
//     )
// }

export default Modal
