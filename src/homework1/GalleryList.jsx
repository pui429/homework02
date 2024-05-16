import GalleryItem from "./GalleryItem";

const GalleryList = ({ data, choose }) => {
  return (
    <ul className="list">
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} choose={choose} />
      ))}
    </ul>
  );
};

export default GalleryList;
