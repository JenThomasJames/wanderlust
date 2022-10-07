import styles from "./NotFound.module.css";
import PrimaryButton from "./shared/PrimaryButton";
const NotFound = (props) => {
  const randomLocationHandler = () => {
    props.locationFound(true);
    props.changeLocationHandler();
  };

  return (
    <div className={styles["not-found-container"]}>
      <div className={styles.overlay}>
        <h1>Got lost, did you? 🤔</h1>
        <p className={styles.errorText}>
          Maybe you made a typo or we don't have the location 'YET'
        </p>
        <div className={styles.gap}></div>
        <PrimaryButton
          clickHandler={randomLocationHandler}
          buttonText="Go to a Random Location"
        />
      </div>
    </div>
  );
};
export default NotFound;
