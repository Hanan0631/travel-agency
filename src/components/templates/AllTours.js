//components
import TourCard from "@/ui/organism/TourCard";

//styles
import styles from "./AllTours.module.css";

function AllTours({toursData}) {

  if(!toursData.length) return<p>نتیجه ای یافت نشد</p>
  
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
    </div>
  );
}

export default AllTours;
