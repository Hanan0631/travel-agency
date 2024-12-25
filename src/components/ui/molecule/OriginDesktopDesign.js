//components
import OriginButton from "../atom/OriginButton";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function OriginDesktopDesign({ city }) {
  return (
    <div className={styles.searchItem} style={{ border: "none" }}>
      {city ? (
        <p>{city}</p>
      ) : (
        <>
          <OriginButton />
          <p>مبدا</p>
        </>
      )}
    </div>
  );
}

export default OriginDesktopDesign;
