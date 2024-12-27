import Image from "next/image";
import styles from "./TourDetailsPage.module.css";
import { sp } from "@/utils/replaceNumber";
import Facilities from "@/ui/molecule/Facilities";
import TransportationIcon from "@/ui/atom/TransportationIcon";
import AvailableSeatsIcon from "@/ui/atom/AvailableSeatsIcon";
import InsuranceIcon from "@/ui/atom/InsuranceIcon";
import OriginIcon from "@/ui/atom/OriginIcon";
import StartDateIcon from "@/ui/atom/StartDateIcon";
import { getJalaliDate } from "@/utils/helper";
import EndDateIcon from "@/ui/atom/EndDateIcon";
import ReserveButton from "@/ui/atom/ReserveButton";
import { tripDuration } from "@/utils/tourInfo";

function TourDetailsPage({ tourData }) {
  if (!tourData) return <p>اطلاعاتی برای این تور یافت نشد.</p>;
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div>
          <Image
            src={tourData.image}
            alt={tourData.title}
            width={330}
            height={220}
          />
          <div className={styles.description}>
            <div className={styles.title}>
              <h3>{tourData.title}</h3>
              <p>{tripDuration(tourData.startDate, tourData.endDate)}</p>
            </div>
            <Facilities />
            <div className={styles.details}>
              <div className={styles.transportation}>
                <div>
                  <TransportationIcon />
                  <p>حمل و نقل</p>
                </div>
                <span>{tourData.fleetVehicle}</span>
              </div>
              <div className={styles.seats}>
                <div>
                  <AvailableSeatsIcon />
                  <p>ظرفیت</p>
                </div>
                <span>{tourData.availableSeats}</span>
              </div>
              <div className={styles.insurance}>
                <div>
                  <InsuranceIcon />
                  <p>بیمه</p>
                </div>
                {tourData.insurance ? (
                  <span>بیمه 50 هزار دیناری</span>
                ) : (
                  <span>فاقد بیمه</span>
                )}
              </div>
            </div>
            <div className={styles.buy}>
              <ReserveButton id={tourData.id} />
              <p>
                {sp(tourData.price)}
                <span>تومان</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.facilityDetails}>
          <div>
            <div>
              <OriginIcon />
              <p>مبدا</p>
            </div>
            <span>{tourData.origin.persianName}</span>
          </div>
          <div>
            <div>
              <StartDateIcon />
              <p>تاریخ رفت</p>
            </div>
            <span>{getJalaliDate(tourData.startDate.split("T")[0])}</span>
          </div>
          <div>
            <div>
              <EndDateIcon />
              <p>تاریخ برگشت</p>
            </div>
            <span>{getJalaliDate(tourData.endDate.split("T")[0])}</span>
          </div>
          <div>
            <div>
              <TransportationIcon />
              <p>حمل و نقل</p>
            </div>
            <span>{tourData.fleetVehicle}</span>
          </div>
          <div>
            <div>
              <AvailableSeatsIcon />
              <p>ظرفیت</p>
            </div>
            <span>{tourData.availableSeats}</span>
          </div>
          <div>
            <div>
              <InsuranceIcon />
              <p>بیمه</p>
            </div>
            {tourData.insurance ? (
              <span>بیمه 50 هزار دیناری</span>
            ) : (
              <span>فاقد بیمه</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
