import styles from "./Landing.module.css";

import PrimaryButton from "../components/shared/PrimaryButton";
const Landing = () => {
  return (
    <div className={styles["background-image"]}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Explore the beauty <br /> of the earth
        </h1>
        <p className={styles.intro}>
          Forget not that the world delights to feel your bare feet and the
          winds long to play your hair
        </p>
        <PrimaryButton buttonText={"Explore"} />
      </div>
    </div>
  );
};
export default Landing;
