import styles from "./Navbar.module.css";

import { useRef } from "react";

import logo from "../../logo.svg";
import PrimaryButton from "./PrimaryButton";
const Navbar = (props) => {
  const locationRef = useRef();
  const locationSubmitHandler = (event) => {
    event.preventDefault();
    let newLocation = locationRef.current.value;
    props.customLocation(newLocation);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.brand} src={logo} alt="brand" />
      <form onSubmit={locationSubmitHandler}>
        <input
          ref={locationRef}
          className={styles.search}
          placeholder="Search a location..."
        />
      </form>
      <PrimaryButton
        buttonText="Random"
        clickHandler={() => props.changeLocation()}
      />
    </div>
  );
};
export default Navbar;
