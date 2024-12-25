import { object, string } from "yup";

const emailSchema = object({
  email: string().matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "ایمیل معتبر وارد کنید."
  ),
});

const personalInfoSchema = object({
  firstName: string().min(3, "نام شما باید حداقل سه حرف داشته باشد."),
  lastName: string().min(3, "نام خانوادگی شما باید حداقل سه حرف داشته باشد."),
  nationalCode: string().length(10, "کد ملی معتبر وارد کنید."),
});

const bankAccountSchema = object({
  shaba_code: string().matches(/^(?:IR)(?=.{24}$)[0-9]*$/, "شماره شبای معتبر وارد کنید."),
  debitCard_code: string().length(16, "شماره کارت باید شانزده رقمی باشد.").required("شماره کارت را وارد کنید."),
  accountIdentifier: string()
    .min(12, "شماره حساب باید حداقل دوازده رقمی باشد.")
    .max(16, "شماره حساب باید حداکثر شانزده رقمی باشد."),
});

export { emailSchema, personalInfoSchema, bankAccountSchema };
