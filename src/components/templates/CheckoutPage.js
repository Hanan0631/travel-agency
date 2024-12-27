"use client";

import { useGetBasket } from "@/services/queries";
import styles from "./CheckoutPage.module.css";
import PersonalInfo from "@/ui/organism/PersonalInfo";
import { tripDuration } from "@/utils/tourInfo";
import { sp } from "@/utils/replaceNumber";
import { useCheckout } from "@/services/mutation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function CheckoutPage({ userData }) {
  const { data, isPending } = useGetBasket();

  const { mutate } = useCheckout();

  const router = useRouter();

  const checkoutHandler = () => {
    const user = {
      nationalCode: userData?.data.nationalCode,
      fullName: `${userData?.data.firstName} ${userData?.data.lastName}`,
      gender: userData?.data.gender,
      birthDate: userData?.data.birthDate,
    };

    if (
      !user.nationalCode ||
      !user.fullName ||
      !user.gender ||
      !user.birthDate
    ) {
      toast.error("ابتدا مشخصات خود را وارد کنید.");
      return;
    }

    mutate(user, {
      onSuccess: () => router.push("/payment?status=success"),
      onError: () => toast.error("مشکلی پیش آمده است!"),
    });
  };

  if (!data)
    return (
      <>
        <p>سبد خرید شما خالی است!</p>
        <Link href="/">برو به صفحه اصلی</Link>
      </>
    );

  return (
    <div className={styles.container}>
      <div className={styles.checkoutContainer}>
        <div className={styles.passengerInfo}>
          <PersonalInfo data={userData} />
        </div>
        <div className={styles.tourInfo}>
          <div className={styles.tourTitle}>
            <h3>{data?.data.title}</h3>
            <p>{tripDuration(data?.data.startDate, data?.data.endDate)}</p>
          </div>
          <div className={styles.finalPrice}>
            <p>قیمت نهایی</p>
            <p>
              {sp(data?.data.price)} <span>تومان</span>
            </p>
          </div>
          <button onClick={checkoutHandler}>ثبت و خرید نهایی</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
