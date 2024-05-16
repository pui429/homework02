const GalleryBig = ({ img }) => {
  const { title, imgurl } = img;
  return (
    <div className="bimg">
      <h2>{title}</h2>
      <img src={imgurl} alt={title} />
    </div>
  );
};

export default GalleryBig;
