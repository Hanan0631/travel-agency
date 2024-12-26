//react
// import { useState } from "react";

//components
import TourCard from "@/ui/organism/TourCard";
import SeeMore from "@/ui/molecule/SeeMore";

//core
// import { useGetTour } from "@/services/queries";

//styles
import styles from "./AllTours.module.css";

function AllTours({toursData, searchParams}) {

  console.log(searchParams)

  if(!toursData.length) return<p>نتیجه ای یافت نشد</p>
  // const [more, setMore] = useState(false);

  // const { data } = useGetTour();

  return (
    <div className={styles.tours}>
      <h3>همه تور ها</h3>
      <main>
        {toursData?.map((tour) => (
          <section href={`/tours/${tour?.id}`} key={tour.id}>
            <TourCard tour={tour} />
          </section>
        ))}
      </main>

      {/* className={!!more ? styles.show : null} */}

      {/* <div
        className={!!more ? styles.hide : styles.more}
        onClick={() => setMore(true)}
      >
        <SeeMore />
      </div> */}
    </div>
  );
}

export default AllTours;
