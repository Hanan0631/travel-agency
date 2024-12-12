"use client";

//components
import CalendarDesktopDesign from "../molecule/CalendarDesktopDesign";
import CalendarMobileDesign from "../molecule/CalendarMobileDesign";
import DestinationDesktopDesign from "../molecule/DestinationDesktopDesign";
import DestinationMobileDesign from "../molecule/DestinationMobileDesign";
import OriginDesktopDesign from "../molecule/OriginDesktopDesign";
import OriginMobileDesign from "../molecule/OriginMobileDesign";
import OriginCities from "./OriginCities";

//styles
import styles from "./SearchTour.module.css";
import { useState } from "react";

// import { useGetTour } from "@/services/queries";

function SearchTour() {
  // const { data, isPending } = useGetTour();
  // console.log(data?.data);

  // const cities = [];

  // data?.data.map((item) => {
  //   if (!cities.includes(item.origin.name)) cities.push(item.origin.name);
  // });

  // console.log(cities)

  const [selectOriginMobile, setSelectOriginMobile] = useState(false);
  const [selectOriginDesktop, setSelectOriginDesktop] = useState(false);

  return (
    <>
      <div className={styles.desktopDesignSearch}>
        <div
          onClick={() =>
            setSelectOriginDesktop(
              (selectOriginDesktop) => !selectOriginDesktop
            )
          }
        >
          <OriginMobileDesign />
        </div>
        <div>
          <DestinationMobileDesign />
        </div>
        <div>
          <CalendarMobileDesign />
        </div>
        <button>جستجو</button>
      </div>
      <div
        className={`${styles.origin} ${
          selectOriginDesktop ? styles.open : styles.close
        }`}
      >
        <OriginCities />
      </div>
      <div className={styles.mobileDesignSearch}>
        <div>
          <div>
            <div
              onClick={() =>
                setSelectOriginMobile(
                  (selectOriginMobile) => !selectOriginMobile
                )
              }
            >
              <OriginDesktopDesign />
            </div>
            <div className={selectOriginMobile ? styles.open : styles.close}>
              <OriginCities />
            </div>
          </div>
          <div>
            <DestinationDesktopDesign />
          </div>
        </div>
        <div>
          <CalendarDesktopDesign />
        </div>
        <button>جستجو</button>
      </div>
    </>
  );
}

export default SearchTour;
