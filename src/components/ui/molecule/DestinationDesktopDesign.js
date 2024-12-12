//components
import DestinationButtonGray from "../atom/DestinationButtonGray";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function DestinationDesktopDesign() {
  return (
    <div className={styles.buttons}>
      <DestinationButtonGray />
      <p>مقصد</p>
    </div>
  );
}

export default DestinationDesktopDesign;
