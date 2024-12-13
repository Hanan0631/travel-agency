//components
import DestinationButton from "../atom/DestinationButton";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function DestinationDesktopDesign() {
  return (
    <div className={styles.searchItem}>
      <DestinationButton />
      <p>مقصد</p>
    </div>
  );
}

export default DestinationDesktopDesign;
