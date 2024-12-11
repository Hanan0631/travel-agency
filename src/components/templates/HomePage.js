import Image from "next/image";
import banner from "@/public/images/banner.png";
import styles from "./HomePage.module.css"
import SearchTour from "@/ui/organism/SearchTour";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Image
        src={banner}
        width={0}
        height={0}
        alt="Banner"
        style={{ width: "100vw", height: "auto" }}
      />
      <h2>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h2>
      <SearchTour />
    </div>
  );
}

export default HomePage;
