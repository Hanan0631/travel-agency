"use client";

//react
import { useState } from "react";

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
              <OriginMobileDesign />
            </div>
            <div className={selectOriginMobile ? styles.open : styles.close}>
              <OriginCities />
            </div>
          </div>
          <div>
            <DestinationMobileDesign />
          </div>
        </div>
        <div>
          <CalendarMobileDesign />
        </div>
        <button>جستجو</button>
      </div>
      <div className={styles.desktopDesignSearch}>
        <div
          onClick={() =>
            setSelectOriginDesktop(
              (selectOriginDesktop) => !selectOriginDesktop
            )
          }
        >
          <OriginDesktopDesign />
        </div>
        <div>
          <DestinationDesktopDesign />
        </div>
        <div>
          <CalendarDesktopDesign />
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
    </>
  );
}

export default SearchTour;
