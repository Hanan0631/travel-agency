import TourCard from "@/ui/organism/TourCard";
import styles from "./AllTours.module.css";
import SeeMore from "@/ui/molecule/SeeMore";

async function AllTours() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`);
  const data = await res.json();

  return (
    <div className={styles.tours}>
      <h3>همه تور ها</h3>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <TourCard item={item} />
          </li>
        ))}
        <div className={styles.more}>
          <SeeMore />
        </div>
      </ul>
    </div>
  );
}

export default AllTours;
