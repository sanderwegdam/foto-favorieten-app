import './Model.css';
import React from "react";
import './Image.css';

const Modal = ({ title, source, closeModal }) => {

    return (
        <div>
            <section onClick={() => closeModal()} className="modal-overlay section section-center">
                <div className="modal-container">
                    <img src={source} alt={title} className="img modal-img" />
                </div>
            </section>
        </div>
    )
}

export default Modal