//next
import Image from "next/image";
import Link from "next/link";

//core
import { sp } from "@/utils/replaceNumber";
import { getMonth, tripDays, vehicles } from "@/utils/tourInfo";

//styles
import styles from "./TourCard.module.css";

function TourCard({ item }) {
  return (
    <div className={styles.card}>
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
      />
      <div className={styles.details}>
        <h3>{item.title}</h3>
        <p>
          {getMonth(item.startDate)} . {tripDays(item.startDate, item.endDate)}
          روزه -{vehicles(item.fleetVehicle)} - {item.options[1]} و ...
        </p>
      </div>
      <div className={styles.reservation}>
        <Link href="/cart">رزرو</Link>
        <p>
          {sp(item.price)} <span>تومان</span>
        </p>
      </div>
    </div>
  );
}

export default TourCard;
