import React from "react";
import { Redirect } from "react-router-dom"
import Image from "./Image";

const Gallery = props => {

  const results = props.data;
  // const [images, setImages] = useState([]);
  let images;
  let redirect;

  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} title={title} />
    });
  } else {
    redirect = <Redirect to={window.location.pathname} />;
  }

  return (
    <div>
      <ul>{images}</ul> {redirect}
    </div>
  );
};

export default Gallery
