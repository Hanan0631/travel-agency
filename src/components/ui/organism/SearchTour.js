//components
import CalendarDesktopDesign from "../molecule/CalendarDesktopDesign";
import CalendarMobileDesign from "../molecule/CalendarMobileDesign";
import DestinationDesktopDesign from "../molecule/DestinationDesktopDesign";
import DestinationMobileDesign from "../molecule/DestinationMobileDesign";
import OriginDesktopDesign from "../molecule/OriginDesktopDesign";
import OriginMobileDesign from "../molecule/OriginMobileDesign";

//styles
import styles from "./SearchTour.module.css";

function SearchTour() {
  return (
    <>
      <div className={styles.desktopDesignSearch}>
        <OriginMobileDesign />
        <DestinationMobileDesign />
        <CalendarMobileDesign />
        <button>جستجو</button>
      </div>
      <div className={styles.mobileDesignSearch}>
        <div>
            <OriginDesktopDesign />
            <DestinationDesktopDesign />
        </div>
        <CalendarDesktopDesign />
        <button>جستجو</button>
      </div>
    </>
  );
}

export default SearchTour;
