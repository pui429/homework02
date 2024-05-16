const GalleryItem = ({ item, choose }) => {
  const { id, title, imgurl } = item;

  return (
    <li>
      <img src={imgurl} alt={title} onClick={() => choose(id)} />
    </li>
  );
};
export default GalleryItem;
