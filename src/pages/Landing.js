import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../components/shared/PrimaryButton";
const Landing = () => {
  const navigate = useNavigate();

  const expoloreHandler = () => {
    navigate("/explore");
  };

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
        <PrimaryButton clickHandler={expoloreHandler} buttonText={"Explore"} />
      </div>
    </div>
  );
};
export default Landing;
