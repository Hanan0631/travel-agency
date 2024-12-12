//components
import OriginButton from "../atom/OriginButton";

//styles
import styles from "./Cities.module.css";

function OriginCities() {
  const citiesList = ["تهران", "سنندج", "اصفهان"];

  return (
    <div className={styles.cities}>
      <p>پرتردد</p>
      {citiesList.map((city, index) => (
        <div key={index}>
          <OriginButton />
          <p>{city}</p>
        </div>
      ))}
    </div>
  );
}

export default OriginCities;
