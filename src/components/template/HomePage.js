import HeroImage from "@/ui/atom/HeroImage";
import styles from "./HomePage.module.css"
import SearchTour from "@/ui/organism/SearchTour";

function HomePage() {
  return (
    <div className={styles.container}>
      <HeroImage />
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <SearchTour />
    </div>
  );
}

export default HomePage;
