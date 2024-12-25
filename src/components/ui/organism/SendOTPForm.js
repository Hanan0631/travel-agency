//react-hot-toast
import toast from "react-hot-toast";

//rect
import { useState } from "react";

//components
import CloseButton from "../atom/CloseButton";
import Loader from "../atom/Loader";

//core
import { e2p } from "@/utils/replaceNumber";
import { useSendOtp } from "@/services/mutation";
import { isValidMobile } from "@/utils/validation";

//styles
import styles from "./SendOTPForm.module.css";

function SendOTPForm({
  mobile,
  setMobile,
  setStep,
  setModalIsOpen,
  reference,
}) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const sendOTPHandler = (e) => {
    e.preventDefault();

    if (!isValidMobile(mobile)) return setError("لطفا شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data.message);
          toast(data?.data.code);
          setStep(2);
        },
        onError: (error) => {
          toast.error("مشکلی پیش آمده دوباره امتحان کنید!");
        },
      }
    );
  };

  return (
    <div className={styles.sendOTP} ref={reference}>
      <span onClick={() => setModalIsOpen(false)}>
        <CloseButton />
      </span>
      <h4>ورود به تورینو</h4>
      <form onSubmit={sendOTPHandler}>
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          autoFocus
          type="text"
          placeholder={`${e2p("4253")}***${e2p("0912")}`}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p className={error ? styles.visible : styles.nonvisible}>{error}</p>
        {isPending ? <Loader /> : <button type="submit">ارسال کد تایید</button>}
      </form>
    </div>
  );
}

export default SendOTPForm;
