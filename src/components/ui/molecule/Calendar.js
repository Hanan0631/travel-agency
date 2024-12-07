import CalendarButton from "../atom/CalendarButton";
import styles from "./SearchItem.module.css";

function Calendar() {
  return (
    <div className={styles.searchItem}>
      <CalendarButton />
      <p>تاریخ</p>
    </div>
  );
}

export default Calendar;
