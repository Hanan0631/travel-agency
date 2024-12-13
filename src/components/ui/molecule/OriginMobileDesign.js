//components
import OriginButtonGray from "../atom/OriginButtonGray";

//styles
import styles from "./SearchItemMobileDesign.module.css";

function OriginMobileDesign() {
  return (
    <div className={styles.buttons}>
      <OriginButtonGray />
      <p>مبدا</p>
    </div>
  );
}

export default OriginMobileDesign;
