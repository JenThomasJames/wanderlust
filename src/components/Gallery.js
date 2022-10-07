import styles from "./Gallery.module.css";

import GalleryImage from "./GalleryImage";

const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      {props.images.map((image) => (
        <GalleryImage source={image} />
      ))}
    </div>
  );
};
export default Gallery;
