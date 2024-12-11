import CalendarButton from "../atom/CalendarButton";
import styles from "./SearchItemMobileDesign.module.css"

function CalendarMobileDesign() {
  return (
    <div className={styles.searchItem}>
      <CalendarButton />
      <p>تاریخ</p>
    </div>
  );
}

export default CalendarMobileDesign;
