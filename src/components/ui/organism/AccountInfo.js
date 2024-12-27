"use client";

//react
import { useState } from "react";

//react-hot-toast
import toast from "react-hot-toast";

//react-hook-form
import { useForm } from "react-hook-form";

//yup
import { yupResolver } from "@hookform/resolvers/yup";

//components
import EditButton from "../atom/EditButton";

//core
import { e2p } from "@/utils/replaceNumber";
import { emailSchema } from "src/core/schema";
import { useUpdateEmail } from "@/services/mutation";

//styles
import styles from "./AccountInfo.module.css";

function AccountInfo({ data }) {
  const [edit, setEdit] = useState(false);

  const { mutate, isPending } = useUpdateEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: data?.data.email,
    },
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(data, {
      onSuccess: () => {
        toast.success("ایمیل جدید ثبت شد.");
        setEdit(false);
      },
      onError: () => toast.error("مشکلی پیش آمده دوباره امتحان کنید!"),
    });
  };

  return (
    <div className={styles.accountInfoContainer}>
      <h3 className={styles.account}>اطلاعات حساب کاربری</h3>
      <div className={styles.info}>
        <div>
          <p>شماره موبایل</p>
          <span>{e2p(data?.data.mobile)}</span>
        </div>
        {edit ? (
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <input {...register("email")} placeholder="آدرس ایمیل" />
              {!!errors?.email && <span>{errors?.email?.message}</span>}
            </div>
            <input type="submit" value="تایید" className="تایید" />
          </form>
        ) : (
          <div className={styles.emailContainer}>
            <div className={styles.email}>
              <p>ایمیل</p>
              {data?.data.email ? (
                <span>{data?.data.email}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            {data?.data.email ? (
              <button onClick={() => setEdit(true)}>
                <EditButton />
                <p>ویرایش</p>
              </button>
            ) : (
              <button onClick={() => setEdit(true)}>
                <EditButton />
                <p>افزودن</p>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountInfo;
