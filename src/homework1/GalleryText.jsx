const GalleryText = ({ img }) => {
  const { title, desc } = img;
  return (
    <div className="text">
      <strong>{title}</strong>
      <p>{desc}</p>
    </div>
  );
};

export default GalleryText;
