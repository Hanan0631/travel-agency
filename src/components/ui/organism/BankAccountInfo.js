//react
import { useState } from "react";

//components
import EditButton from "../atom/EditButton";
import EditBankAccountInfo from "./EditBankAccountInfo";

//styles
import styles from "./AccountInfo.module.css";

function BankAccountInfo({ data }) {
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.accountInfoContainer}>
      {edit ? (
        <EditBankAccountInfo setEdit={setEdit} prevData={data} />
      ) : (
        <>
          <div className={styles.title}>
            <h3>اطلاعات حساب بانکی</h3>
            <button onClick={() => setEdit(true)}>
              <EditButton />
              <p>ویرایش اطلاعات</p>
            </button>
          </div>
          <div className={styles.info}>
            <div>
              <p>شماره کارت</p>
              {data?.data.payment?.debitCard_code ? (
                <span>{data?.data.payment?.debitCard_code}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>شماره شبا</p>
              {data?.data.payment?.shaba_code ? (
                <span>{data?.data.payment?.shaba_code}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>شماره حساب</p>
              {data?.data.payment?.accountIdentifier ? (
                <span>{data?.data.payment?.accountIdentifier}</span>
              ) : (
                <span>-</span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BankAccountInfo;
