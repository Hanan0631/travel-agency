//components
import DestinationButtonGray from "../atom/DestinationButtonGray";

//styles
import styles from "./SearchItemMobileDesign.module.css";

function DestinationMobileDesign() {
  return (
    <div className={styles.buttons}>
      <DestinationButtonGray />
      <p>مقصد</p>
    </div>
  );
}

export default DestinationMobileDesign;
