import Logo from "@/ui/atom/Logo";
import styles from "./Footer.module.css";
import Image from "next/image";
import aira from "@/public/images/aira.png";
import ecunion from "@/public/images/ecunion.png";
import passengerRights from "@/public/images/passenger-rights.png";
import samandehi from "@/public/images/samandehi.png";
import stateAirline from "@/public/images/state-airline.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <div className={styles.right}>
          <div className={styles.torino}>
            <p>تورینو</p>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div className={styles.services}>
            <p>خدمات مشتریان</p>
            <ul>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className={styles.left}>
          <Logo />
            <p>تلفن پشتیبانی: 8574-021</p>
          <div>
            <Image src={aira} width={68} height={74} alt="aira" />
            <Image src={ecunion} width={68} height={74} alt="ecunion" />
            <Image
              src={passengerRights}
              width={71}
              height={74}
              alt="passenger rights"
            />
            <Image src={samandehi} width={67} height={74} alt="samandehi" />
            <Image
              src={stateAirline}
              width={78}
              height={74}
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
