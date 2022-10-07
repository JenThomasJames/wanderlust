import styles from "./Destination.module.css";
import DestinationImage from "./DestinationImage";
const Destination = (props) => {
  return (
    <div className={styles.destination}>
      <li>
        <h5>{props.location.siteName}</h5>
        <p className={styles.description}>{props.location.description}</p>
        <div className={styles.center}>
          <DestinationImage source={props.location.image} />
        </div>
      </li>
    </div>
  );
};
export default Destination;
