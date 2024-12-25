"use client";

//react
import { useState } from "react";

//components
import TourCard from "@/ui/organism/TourCard";
import SeeMore from "@/ui/molecule/SeeMore";

//core
import { useGetTour } from "@/services/queries";

//styles
import styles from "./AllTours.module.css";

function AllTours() {
  const [more, setMore] = useState(false);

  const { data } = useGetTour();

  return (
    <div className={styles.tours}>
      <h3>همه تور ها</h3>
      <ul>
        {data?.data.map((item) => (
          <li key={item.id} className={!!more ? styles.show : null}>
            <TourCard item={item} />
          </li>
        ))}
      </ul>
      <div
        className={!!more ? styles.hide : styles.more}
        onClick={() => setMore(true)}
      >
        <SeeMore />
      </div>
    </div>
  );
}

export default AllTours;
