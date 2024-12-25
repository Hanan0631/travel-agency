"use client";

//components
import OriginButton from "../atom/OriginButton";

//styles
import styles from "./Cities.module.css";

function OriginCities({
  cities,
  setCity,
  setSelectOriginDesktop,
  setSelectOriginMobile,
}) {

  const selectCityHandler = (city) => {
    setCity(city);
    setSelectOriginDesktop(false);
    setSelectOriginMobile(false);
  };

  return (
    <div className={styles.cities}>
      <p>پرتردد</p>
      {cities.map((city, index) => (
        <div key={index} onClick={() => selectCityHandler(city)}>
          <OriginButton />
          <p>{city}</p>
        </div>
      ))}
    </div>
  );
}

export default OriginCities;
