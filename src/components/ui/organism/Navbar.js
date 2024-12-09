//next
import Link from "next/link";

//components
import HomeIcon from "../atom/HomeIcon";
import ServicesIcon from "../atom/ServicesIcon";
import AboutUsIcon from "../atom/AboutUsIcon";
import CallUsIcon from "../atom/CallUsIcon";

//styles
import styles from "./Navbar.module.css";

function Navbar({ reference }) {
  return (
    <div className={styles.navbarContainer} >
      <div className={styles.navbar} ref={reference}>
        <Link href="/">
          <HomeIcon />
          صفحه اصلی
        </Link>
        <Link href="/">
          <ServicesIcon />
          خدمات گردشگری
        </Link>
        <Link href="/">
          <AboutUsIcon />
          درباره ما
        </Link>
        <Link href="/">
          <CallUsIcon />
          تماس با ما
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
