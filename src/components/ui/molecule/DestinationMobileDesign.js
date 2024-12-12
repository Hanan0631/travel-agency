//components
import DestinationButton from "../atom/DestinationButton"

//styles
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
