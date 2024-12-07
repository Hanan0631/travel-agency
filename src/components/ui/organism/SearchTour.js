import Calendar from "../molecule/Calendar";
import Destination from "../molecule/Destination";
import Origin from "../molecule/Origin";
import styles from "./SearchTour.module.css";

function SearchTour() {
  return (
    <div className={styles.search}>
      <Origin />
      <Destination />
      <Calendar />
      <button>جستجو</button>
    </div>
  );
}

export default SearchTour;
