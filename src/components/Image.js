import React, { useState, useEffect } from "react";
import { AiFillLike, AiFillWindows } from 'react-icons/ai';
import Modal from './Modal';
import './Image.css';

const Image = ({ key, url, title }) => {


  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const selectImage = (url) => {
    let image = url;
    if (image) {
      image = favorites.find((image) => image.url === url);
    }
    setSelectedImage(image);
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

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

  const addToFavorites = (url) => {
    const image = url;
    if (favorites.includes(image))
      return
    const updatedFavorites = [...favorites, url]
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    getFavorites()
  }

  function getFavorites() {
    window.location.reload()
  }

  return (
    <>
      <li>
        <img className="image" src={url} alt={title} style={{ marginBottom: "20px" }} id={key} selectedImage={selectedImage} onClick={() => selectImage(url)} />
        <button id="button" className='like-btn' onClick={() => addToFavorites(url)}><AiFillLike /></button>
      </li>

      <div>{showModal && <Modal source={url} closeModal={closeModal} />}</div>
    </>
  )
};

export default Image;
