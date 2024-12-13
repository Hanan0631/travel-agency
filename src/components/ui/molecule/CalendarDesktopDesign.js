//react multi date picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";

//react
import { useRef, useState } from "react";

//components
import CalendarButton from "../atom/CalendarButton";

//styles
import styles from "./SearchItemDesktopDesign.module.css";

function CalendarDesktopDesign() {
  const [value, setValue] = useState();
  const datePickerRef = useRef();

  const datePickerStyle = {
    border: "none",
    textAlign: "center",
    color: " #00000080",
  };

  const buttonStyle = {
    display: "flex",
    marginTop: "-5px",
    marginBottom: "-10px",
    background: "none",
    gap: "8px",
  };
  return (
    <div className={styles.searchItem}>
      <DatePicker
        render={
          value
            ? null
            : () => {
                return (
                  <button
                    style={buttonStyle}
                    onClick={() => datePickerRef.current.openCalendar()}
                  >
                    <CalendarButton />
                    <p>تاریخ</p>
                  </button>
                );
              }
        }
        hideYear
        style={datePickerStyle}
        value={value}
        onChange={(e) => setValue(new Date(e))}
        ref={datePickerRef}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        buttons={false}
        className="green"
      />
    </div>
  );
}

export default CalendarDesktopDesign;
