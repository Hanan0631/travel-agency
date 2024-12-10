"use client";
//react-input-otp
import OtpInput from "react18-input-otp";

//react-hot-toast
import toast from "react-hot-toast";

//react-count-down
import Countdown from "react-countdown";

//react
import { useState } from "react";

//components
import BackButton from "../atom/BackButton";
import Loader from "../atom/Loader";

//core
import { useCheckOtp } from "@/services/mutation";
import { setCookie } from "@/utils/cookie";

//styles
import styles from "./CheckOTPForm.module.css";

function CheckOTPForm({ mobile, setStep, setModalIsOpen, reference }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();

  const checkOTPHandler = (e) => {
    e.preventDefault();

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data.accessToken, 30);
          setCookie("refreshToken", data?.data.refreshToken, 365);
          setModalIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          toast.error("مشکلی پیش آمده دوباره امتحان کنید!");
        },
      }
    );
  };

  return (
    <div className={styles.checkOTP} ref={reference}>
      <span onClick={() => setStep(1)}>
        <BackButton />
      </span>
      <h4>کد تایید را وارد کنید.</h4>
      <form onSubmit={checkOTPHandler}>
        <label>کد تایید به شماره {mobile} ارسال شد</label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={(otp) => setCode(otp)}
            numInputs={6}
            inputStyle={{
              border: "1px solid #00000040",
              borderRadius: "6px",
              width: "48px",
              height: "45px",
              marginRight: "3px",
              marginLeft: "3px",
            }}
          />
        </div>
        <div className={styles.countDown}>
          <Countdown
            date={Date.now() + 120000}
            onComplete={() => setStep(1)}
            daysInHours={true}
          />
          <span>تا ارسال مجدد کد </span>
        </div>
        {isPending ? <Loader /> : <button type="submit">ورود به تورینو</button>}
      </form>
    </div>
  );
}

export default CheckOTPForm;
