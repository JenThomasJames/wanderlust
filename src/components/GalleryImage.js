import styles from "./GalleryImage.module.css";
const GalleryImage = (props) => {
  return <img className={styles.image} src={props.source} alt={"country"} />;
};
export default GalleryImage;
