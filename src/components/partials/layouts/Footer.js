//next
import Image from "next/image";
import Link from "next/link";

//public
import logo from "@/public/images/logo.png";
import aira from "@/public/images/aira.png";
import ecunion from "@/public/images/ecunion.png";
import passengerRights from "@/public/images/passenger-rights.png";
import samandehi from "@/public/images/samandehi.png";
import stateAirline from "@/public/images/state-airline.png";

//components
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <div className={styles.right}>
          <div className={styles.torino}>
            <h3>تورینو</h3>
            <ul>
              <li>
                <Link href="#">درباره ما</Link>
              </li>
              <li>
                <Link href="#">تماس با ما</Link>
              </li>
              <li>
                <Link href="#">چرا تورینو</Link>
              </li>
              <li>
                <Link href="#">بیمه مسافرتی</Link>
              </li>
            </ul>
          </div>
          <div className={styles.services}>
            <h3>خدمات مشتریان</h3>
            <ul>
              <li>
                <Link href="#">پشتیبانی آنلاین</Link>
              </li>
              <li>
                <Link href="#">راهنمای خرید</Link>
              </li>
              <li>
                <Link href="#">راهنمای استرداد</Link>
              </li>
              <li>
                <Link href="#">پرسش و پاسخ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={logo} width={100} height={30} alt="Logo" />
            <p>تلفن پشتیبانی: 8574-021</p>
          </div>
          <div className={styles.images}>
            <Image src={aira} width={35} height={38} alt="aira" />
            <Image src={ecunion} width={34} height={38} alt="ecunion" />
            <Image
              src={passengerRights}
              width={36}
              height={38}
              alt="passenger rights"
            />
            <Image src={samandehi} width={34} height={38} alt="samandehi" />
            <Image
              src={stateAirline}
              width={40}
              height={38}
              alt="state airline"
            />
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
}

export default Footer;
