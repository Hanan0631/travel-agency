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
import { useGetTour } from "@/services/queries";

function SearchTour() {
  const { data } = useGetTour();

  const [selectOriginMobile, setSelectOriginMobile] = useState(false);
  const [selectOriginDesktop, setSelectOriginDesktop] = useState(false);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const cities = [];
  data?.data.filter((item) => {
    if (!cities.includes(item.origin.persianName)) {
      cities.push(item.origin.persianName);
    }
  });

  console.log(cities);

  const searchHandler = () => {
    let newData = [];
     data?.data.filter((item) => {
      if (
        item.origin.persianName === city &&
        item.startDate.split("T")[0] ===
          new Date(date).toISOString().split("T")[0]
      )
        newData.push(item);
    });
    console.log(newData);
    console.log(new Date(date).toISOString().split("T")[0]);
  };

  console.log(city);
  return (
    <div className={styles.searchContainer}>
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
              <OriginMobileDesign city={city} />
            </div>
            <div
              className={`${styles.originCities} ${
                selectOriginMobile ? styles.open : styles.close
              }`}
            >
              <OriginCities
                cities={cities}
                setCity={setCity}
                setSelectOriginDesktop={setSelectOriginDesktop}
                setSelectOriginMobile={setSelectOriginMobile}
              />
            </div>
          </div>
          <div>
            <DestinationMobileDesign />
          </div>
        </div>
        <div>
          <CalendarMobileDesign setDate={setDate} date={date} />
        </div>
        <button onClick={searchHandler}>جستجو</button>
      </div>
      <div className={styles.desktopDesignSearch}>
        <div
          onClick={() =>
            setSelectOriginDesktop(
              (selectOriginDesktop) => !selectOriginDesktop
            )
          }
        >
          <OriginDesktopDesign city={city} />
        </div>
        <div>
          <DestinationDesktopDesign />
        </div>
        <div>
          <CalendarDesktopDesign setDate={setDate} date={date} />
        </div>
        <button onClick={searchHandler}>جستجو</button>
      </div>
      <div
        className={`${styles.origin} ${
          selectOriginDesktop ? styles.open : styles.close
        }`}
      >
        <OriginCities
          cities={cities}
          setCity={setCity}
          setSelectOriginDesktop={setSelectOriginDesktop}
          setSelectOriginMobile={setSelectOriginMobile}
        />
      </div>
    </div>
  );
}

export default SearchTour;
