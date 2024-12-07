import OriginButton from "../atom/OriginButton";
import styles from "./SearchItem.module.css"

function Origin() {
  return (
    <div className={styles.searchItem} style={{border: "none"}}>
      <OriginButton />
      <p>مبدا</p>
    </div>
  );
}

export default Origin;
