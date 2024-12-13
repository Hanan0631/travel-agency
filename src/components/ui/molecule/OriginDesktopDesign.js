//components
import OriginButton from "../atom/OriginButton";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function OriginDesktopDesign() {
  return (
    <div className={styles.searchItem} style={{ border: "none" }}>
      <OriginButton />
      <p>مبدا</p>
    </div>
  );
}

export default OriginDesktopDesign;
