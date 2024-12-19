import styles from "./PhoneShopping.module.css";
import Image from "next/image";
import cartoonMan from "@/public/images/cartoon-man.png";
import { e2p } from "@/utils/replaceNumber";
import CallIcon from "../atom/CallIcon";

function PhoneShopping() {
  return (
    <div className={styles.phone}>
      <div className={styles.description}>
        <div>
          <h4>
            خرید تلفنی از <span>تورینو</span>
          </h4>
          <p>به هرکجا که میخواهید!</p>
        </div>
        <Image src={cartoonMan} width={195} height={158} alt="phone shopping" />
      </div>
      <div className={styles.call}>
        <div>
          <p>{e2p("021-1840")}</p>
          <CallIcon />
        </div>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default PhoneShopping;
