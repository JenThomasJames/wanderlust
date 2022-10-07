import styles from "./Country.module.css";

import { useState } from "react";

import countries from "../data/country-data";
import Cover from "../components/Cover";
import CountryMeta from "../components/CountryMeta";
import Gallery from "../components/Gallery";
import Destination from "../components/Destination";

const Country = () => {
  const countrySelector = () => {
    const numberOfCountries = countries.length;
    const index = Math.floor(Math.random() * numberOfCountries);
    return countries[index];
  };

  const searchCountryByName = (country) => {
    const index = countries.findIndex(
      (x) => x.name.toLowerCase() === country.toLowerCase()
    );
    if (index < 0) return;
    return countries[index];
  };

  const customLocationHandler = (newLocation) => {
    const country = searchCountryByName(newLocation);
    //show a 404 page as country is not yet in the database
    if (country === undefined) return;
    setCountry(country);
  };

  const [country, setCountry] = useState(countrySelector());

  const changeLocationHandler = () => {
    setCountry(countrySelector());
  };

  return (
    <div className="container">
      <Cover
        coverImage={country.coverImage}
        name={country.name}
        tagline={country.tagline}
        changeLocationHandler={changeLocationHandler}
        customLocationHandler={customLocationHandler}
      />
      <div className={styles.content}>
        <div className={styles["intro-container"]}>
          <p className={styles.intro}>
            <span className="highlight-text">{country.name}</span>
            {country.intro}
          </p>
        </div>
        <div className={styles["country-meta-container"]}>
          <CountryMeta data={country.meta} />
        </div>
        <div className={styles["gallery-container"]}>
          <h3>Gallery</h3>
          <Gallery images={country.gallery} />
        </div>
        <div className={styles["destinations-container"]}>
          <h3>Top Destinations</h3>
          <ul>
            {country.topSites.map((site) => (
              <Destination location={site} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Country;
