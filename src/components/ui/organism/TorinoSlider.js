//components
import QuestionIcon from "../atom/QuestionIcon";
import ImageSlider from "./ImageSlider";

//styles
import styles from "./TorinoSlider.module.css";

function TorinoSlider() {
  return (
    <>
      <div className={styles.sliderContainer}>
        <div>
          <h3>
            <span className={styles.question}>
              <QuestionIcon />
              <span>؟</span>
            </span>
            <div className={styles.polygon}>؟</div>
            چرا <span className={styles.torino}>تورینو</span>؟
          </h3>
          <h5>تور طبیعت گردی و تاریخی</h5>
          <p>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <ImageSlider />
      </div>
      <div className={styles.border}></div>
    </>
  );
}

export default TorinoSlider;
