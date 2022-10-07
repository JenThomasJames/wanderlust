import styles from "./DestinationImage.module.css";
const DestinationImage = (props) => {
  return <img className={styles.image} src={props.source} alt="destination" />;
};
export default DestinationImage;
