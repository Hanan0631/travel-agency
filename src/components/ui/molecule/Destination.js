import DestinationButton from "../atom/DestinationButton"
import styles from "./SearchItem.module.css"

function Destination() {
  return (
    <div className={styles.searchItem}>
      <DestinationButton />
      <p>مقصد</p>
    </div>
  )
}

export default Destination
