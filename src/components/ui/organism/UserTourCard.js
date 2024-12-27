//core
import { calculateSpentTime, getJalaliDate } from "@/utils/helper";
import { e2p, sp } from "@/utils/replaceNumber";

//styles
import styles from "./UserTourCard.module.css";

function UserTourCard({ tourData }) {
  console.log(tourData);
  return (
    <div className={styles.tourCard}>
      <div className={styles.title}>
        <h3>{tourData.title}</h3>
        <p>سفر با {tourData.fleetVehicle}</p>
      </div>
      <div className={styles.tourTime}>
        <div className={styles.originAndDestination}>
          <p>
            {tourData.origin.persianName} به {tourData.destination.persianName}
          </p>
          <span>{getJalaliDate(tourData.startDate)}</span>
        </div>
        <div className={styles.end}>
          <p>تاریخ برگشت</p>
          <span>{getJalaliDate(tourData.endDate)}</span>
        </div>
      </div>
      <div className={styles.status}>
        <span
          className={
            calculateSpentTime(tourData.startDate, tourData.endDate) ===
            "شروع نشده"
              ? styles.notStarted
              : calculateSpentTime(tourData.startDate, tourData.endDate) ===
                "به اتمام رسیده"
              ? styles.finished
              : styles.inProgress
          }
        >
          {calculateSpentTime(tourData.startDate, tourData.endDate)}
        </span>
      </div>
      <div className={styles.price}>
        <div>
          <p>شماره تور</p>
          <span>{e2p(102095404)}</span>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <p>مبلغ پرداخت شده</p>
          <p className={styles.amount}>
            {sp(tourData.price)} <span>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserTourCard;
