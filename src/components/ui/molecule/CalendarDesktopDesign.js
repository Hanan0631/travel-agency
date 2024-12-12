//components
import CalendarButtonGray from "../atom/CalendarButtonGray";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function CalendarDesktopDesign() {
  return (
    <div className={styles.buttons}>
      <CalendarButtonGray />
      <p>تاریخ</p>
    </div>
  );
}

export default CalendarDesktopDesign;
