import styles from "./PrimaryButton.module.css";
const PrimaryButton = (props) => {
  return (
    <button onClick={props.clickHandler} className={styles.btn}>
      {props.buttonText}
    </button>
  );
};
export default PrimaryButton;
