"use client";

import { useUpdatePersonalInfo } from "@/services/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { personalInfoSchema } from "src/core/schema";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "./EditInfo.module.css";

import "react-multi-date-picker/styles/colors/green.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { dateToIso } from "@/utils/helper";

function EditPersonalInfo({ setEdit, prevData }) {
  const { mutate, isPending } = useUpdatePersonalInfo();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      firstName: prevData?.data.firstName,
      lastName: prevData?.data.lastName,
      nationalCode: prevData?.data.nationalCode,
      birthDate: new Date(prevData?.data.birthDate).toLocaleDateString("fa-IR"),
    },
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(data, {
      onSuccess: () => {
        toast.success("اطلاعات شخصی با موفقیت ویرایش شد.");
        setEdit(false);
      },
      onError: () => toast.error("مشکلی پیش آمده دوباره امتحان کنید."),
    });
  };

  return (
    <div className={styles.editInfo}>
      <h3>ویرایش اطلاعات شخصی</h3>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={styles.personalInfo}
      >
        <div className={styles.inputs}>
          <div>
            <input {...register("firstName")} placeholder="نام" />
            {!!errors?.firstName && (
              <span className={styles.error}>{errors?.firstName?.message}</span>
            )}
          </div>
          <div>
            <input {...register("lastName")} placeholder="نام خانوادگی" />
            {!!errors?.lastName && (
              <span className={styles.error}>{errors?.lastName?.message}</span>
            )}
          </div>
          <div>
            <input {...register("nationalCode")} placeholder="کد ملی" />
            {!!errors?.nationalCode && (
              <span className={styles.error}>
                {errors?.nationalCode?.message}
              </span>
            )}
          </div>
          <select {...register("gender")}>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange } }) => (
              <DatePicker
                maxDate={new DateObject().subtract(6570, "day")}
                onChange={(e) => onChange(e.toDate().toISOString())}
                calendar={persian}
                locale={persian_fa}
                className="green"
                calendarPosition="bottom-right"
                render={
                  <input style={{ height: "40px" }} placeholder="تاریخ تولد" />
                }
              />
            )}
          />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.buttons}>
          <input type="submit" value="تایید" className="تایید" />
          <input
            type="button"
            onClick={() => setEdit(false)}
            value="انصراف"
            className="انصراف"
          />
        </div>
      </form>
    </div>
  );
}

export default EditPersonalInfo;
