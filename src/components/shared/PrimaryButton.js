import styles from "./PrimaryButton.module.css";
const PrimaryButton = (props) => {
  return <button className={styles.btn}>{props.buttonText}</button>;
};
export default PrimaryButton;
