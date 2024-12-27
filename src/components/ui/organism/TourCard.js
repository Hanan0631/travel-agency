//next
import Image from "next/image";
import Link from "next/link";

//core
import { sp } from "@/utils/replaceNumber";
import { getMonth, tripDays, vehicles } from "@/utils/tourInfo";

//styles
import styles from "./TourCard.module.css";

function TourCard({ tour }) {
  return (
    <div className={styles.card}>
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
      />
      <div className={styles.details}>
        <h3>{tour.title}</h3>
        <p>
          {getMonth(tour.startDate)} . {tripDays(tour.startDate, tour.endDate)}
          روزه -{vehicles(tour.fleetVehicle)} - {tour.options[1]} و ...
        </p>
      </div>
      <div className={styles.reservation}>
        <Link href={`/tours/${tour?.id}`}>رزرو</Link>
        <p>
          {sp(tour.price)} <span>تومان</span>
        </p>
      </div>
    </div>
  );
}

export default TourCard;
