import OriginButton from "../atom/OriginButton";
import styles from "./SearchItemMobileDesign.module.css"

function OriginMobileDesign() {
  return (
    <div className={styles.searchItem} style={{border: "none"}}>
      <OriginButton />
      <p>مبدا</p>
    </div>
  );
}

export default OriginMobileDesign;
