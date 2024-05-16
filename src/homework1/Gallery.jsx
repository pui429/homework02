import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import "./Gallery.scss";
import gallery from "../assets/api/gallery";
import { useState } from "react";

const Gallery = () => {
  const [data, setData] = useState(gallery);
  const [img, setImg] = useState(data[0]);
  const choose = (idx) => {
    setImg(data.find((item) => item.id === idx));
  };

  return (
    <div className="wrap">
      <GalleryView data={data} img={img} choose={choose} />
      <GalleryText img={img} choose={choose} />
    </div>
  );
};

export default Gallery;
