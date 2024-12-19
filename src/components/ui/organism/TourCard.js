import { e2p, sp } from "@/utils/replaceNumber";
import styles from "./TourCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { getMonth, tripDays, vehicles } from "@/utils/tourInfo";

function TourCard({ item }) {
  return (
    <div className={styles.card}>
      <Image
        src={item.image}
        alt={item.title}
        layout="fill"
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
        <p>{sp(item.price)} <span>تومان</span></p>
      </div>
    </div>
  );
}

export default TourCard;
