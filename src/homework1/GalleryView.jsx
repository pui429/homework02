import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";

const GalleryView = ({ data, choose, img }) => {
  return (
    <div className="bigview">
      <GalleryBig img={img} />
      <GalleryList data={data} choose={choose} />
    </div>
  );
};

export default GalleryView;
