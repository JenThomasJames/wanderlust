import styles from "./Cover.module.css";

import Navbar from "./shared/Navbar";
const Cover = (props) => {
  return (
    <div className={styles["cover-container"]}>
      <div className={styles["navbar-container"]}></div>
      <img className={styles.cover} src={props.coverImage} alt="cover.img" />
      <div className={styles.overlay}>
        <div className={styles["navbar-container"]}>
          <Navbar
            customLocation={props.customLocationHandler}
            changeLocation={props.changeLocationHandler}
          />
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{props.name.toUpperCase()}</h1>
          <p className={styles.tagline}>{props.tagline}</p>
        </div>
      </div>
    </div>
  );
};
export default Cover;
