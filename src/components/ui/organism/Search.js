"use client";

//next
import { useRouter } from "next/navigation";

//react
import { useEffect } from "react";

//react-hook-form
import { Controller, useForm } from "react-hook-form";

//react-multi-date-picker
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";

//qs
import QueryString from "qs";

//core
import { destinations, flattenObject, origins } from "@/utils/helper";
import { useGetTour } from "@/services/queries";
import useQuery from "src/core/hooks/query";

//styles
import styles from "./Search.module.css";

function Search() {
  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending } = useGetTour();
  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    const startDate = getQuery("startDate");
    const endDate = getQuery("endDate");
    console.log({ originId, destinationId, startDate, endDate });
    if (originId && destinationId && startDate && endDate)
      reset({ originId, destinationId, startDate, endDate });
  }, []);

  const submitHandler = (form) => {
    if (isPending) return;
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <div className={styles.selectContainer}>
        <select {...register("originId")} className={styles.select}>
          <option value="">مبدا</option>
          {origins(data).map((item) => (
            <option key={item.id} value={item.id}>
              {item.persianName}
            </option>
          ))}
        </select>
        <select {...register("destinationId")} className={styles.select}>
          <option value="">مقصد</option>
          {destinations(data).map((item) => (
            <option key={item.id} value={item.id}>
              {item.persianName}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.datePicker}>
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange } }) => (
            <DatePicker
              range
              minDate={new DateObject({ calendar: persian }).set(Date.now())}
              dateSeparator=" تا "
              rangeHover
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              buttons={false}
              className="green"
              onChange={(e) =>
                onChange({
                  startDate: e[0]?.toDate().toISOString(),
                  endDate: e[1]?.toDate().toISOString(),
                })
              }
              render={<input placeholder="تاریخ" />}
            />
          )}
        />
      </div>
      <input type="submit" value="جستجو" className={`جستجو ${styles.select}`}  />
    </form>
  );
}

export default Search;
