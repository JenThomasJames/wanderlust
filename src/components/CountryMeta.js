import { Fragment } from "react";
import styles from "./CountryMeta.module.css";
const CountryMeta = (props) => {
  return (
    <Fragment>
      <div className={styles["meta-container"]}>
        <div className={styles["heading-container"]}>
          <i class="bi bi-people"></i>
          <h4>Population</h4>
        </div>
        <h6>{props.data.population}</h6>
      </div>
      <div className={styles["meta-container"]}>
        <div className={styles["heading-container"]}>
          <i class="bi bi-geo-alt"></i>
          <h4>Capital</h4>
        </div>
        <h6>{props.data.capital}</h6>
      </div>
      <div className={styles["meta-container"]}>
        <div className={styles["heading-container"]}>
          <i class="bi bi-chat-right-dots"></i>
          <h4>Language</h4>
        </div>
        <h6>{props.data.language}</h6>
      </div>
      <div className={styles["meta-container"]}>
        <div className={styles["heading-container"]}>
          <i class="bi bi-cash"></i>
          <h4>Currency</h4>
        </div>
        <h6>{props.data.currency}</h6>
      </div>
      <div className={styles["meta-container"]}>
        <div className={styles["heading-container"]}>
          <i class="bi bi-globe"></i>
          <h4>Continent</h4>
        </div>
        <h6>{props.data.continent}</h6>
      </div>
    </Fragment>
  );
};
export default CountryMeta;
