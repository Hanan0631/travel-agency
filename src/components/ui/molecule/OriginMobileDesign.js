//components
import OriginButtonGray from "../atom/OriginButtonGray";

//styles
import styles from "./SearchItemMobileDesign.module.css";

function OriginMobileDesign({ city }) {
  return (
    <div className={styles.buttons}>
      {city ? (
        <p>{city}</p>
      ) : (
        <>
          <OriginButtonGray />
          <p>مبدا</p>
        </>
      )}
    </div>
  );
}

export default OriginMobileDesign;
