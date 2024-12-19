//next
import Image from "next/image";

//public
import bestPrice from "@/public/images/best-price.png";
import support from "@/public/images/support.png";
import userSatisfaction from "@/public/images/user-satisfaction.png";

//core
import { e2p } from "@/utils/replaceNumber";

//styles
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div>
        <Image src={bestPrice} width={71} height={64} alt="best price" />
        <div>
          <h4>بصرفه ترین قیمت</h4>
          <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </div>
      </div>
      <div>
        <Image src={support} width={70} height={64} alt="support" />
        <div>
          <h4>پشتیبانی</h4>
          <p>پشتیبانی و همراهی {e2p(24)} ساعته در تمامی مراحل سفر شما.</p>
        </div>
      </div>
      <div>
        <Image
          src={userSatisfaction}
          width={64}
          height={64}
          alt="user satisfaction"
        />
        <div>
          <h4>رضایت کاربران</h4>
          <p>رضایت بیش از {e2p(10)}هزار کاربر از تور های ما. </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
