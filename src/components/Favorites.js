import React, { useState } from "react";
import Modal from './Modal';
import './Favorites.css';
import { AiOutlineDelete } from 'react-icons/ai';

const Favorites = () => {

    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const getFavoritesFromLocalStorage = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites) {
            favorites = JSON.parse(localStorage.getItem('favorites'));
        }
        else {
            favorites = []
        }
        return favorites
    }

    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

    const selectImage = (item) => {
        let image = item;
        if (image) {
            setShowModal(true)
            setSelectedImage(image)
        }
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const removeFromFavorites = (url) => {
        const updatedFavorites = favorites.filter((image) => image !== url);
        setFavorites(updatedFavorites)
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    return (
        <section className="favorites">
            <div className="favorites-content">
                <h3>Favorieten</h3>
                <div className="favorites-container">
                    {favorites.map((item) => {
                        // const { url, image } = item; 
                        return <div key={item} className="favorite-item" >
                            <img src={item} alt={item} className="favorites-img img" onClick={() => selectImage(item, true)} />
                            <button className='remove-btn' onClick={() => removeFromFavorites(item)}><AiOutlineDelete /></button>
                            {showModal && <Modal source={selectedImage} closeModal={closeModal} />} </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Favorites