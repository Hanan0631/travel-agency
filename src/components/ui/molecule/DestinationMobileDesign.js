import DestinationButton from "../atom/DestinationButton"
import styles from "./SearchItemMobileDesign.module.css"

function DestinationMobileDesign() {
  return (
    <div className={styles.searchItem}>
      <DestinationButton />
      <p>مقصد</p>
    </div>
  )
}

export default DestinationMobileDesign
