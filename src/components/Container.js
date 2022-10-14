import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import "./Image.css"

const Container = ({ searchTerm }) => {

  const { images, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      <h1>{searchTerm}</h1>
      <Gallery data={images} />
    </div>
  );
};

export default Container;
