//react-hot-toast
import toast from "react-hot-toast";

//react-hook-form
import { useForm } from "react-hook-form";

//yup
import { yupResolver } from "@hookform/resolvers/yup";

//core
import { useUpdatePersonalInfo } from "@/services/mutation";
import { bankAccountSchema } from "src/core/schema";

//styles
import styles from "./EditInfo.module.css";

function EditBankAccountInfo({ setEdit, prevData }) {
  const { mutate, isPending } = useUpdatePersonalInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
    defaultValues: {
      debitCard_code: prevData?.data.payment?.debitCard_code,
      accountIdentifier: prevData?.data.payment?.accountIdentifier,
      shaba_code: prevData?.data.payment?.shaba_code,
    },
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: () => {
          toast.success("اطلاعات حساب بانکی با موفقیت ویرایش شد.");
          setEdit(false);
        },
        onError: () => toast.error("مشکلی پیش آمده دوباره امتحان کنید."),
      }
    );
  };

  return (
    <div className={styles.editInfo}>
      <h3>ویرایش اطلاعات حساب بانکی</h3>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={styles.personalInfo}
      >
        <div className={styles.inputs}>
          <div>
            <input {...register("debitCard_code")} placeholder="شماره کارت" />
            {!!errors?.debitCard_code && (
              <span className={styles.error}>
                {errors?.debitCard_code?.message}
              </span>
            )}
          </div>
          <div>
            <input
              {...register("accountIdentifier")}
              placeholder="شماره حساب"
            />
            {!!errors?.accountIdentifier && (
              <span className={styles.error}>
                {errors?.accountIdentifier?.message}
              </span>
            )}
          </div>
          <div>
            <input {...register("shaba_code")} placeholder="شماره شبا" />
            {!!errors?.shaba_code && (
              <span className={styles.error}>
                {errors?.shaba_code?.message}
              </span>
            )}
          </div>
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

export default EditBankAccountInfo;
