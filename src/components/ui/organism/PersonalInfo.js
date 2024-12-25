//react
import { useState } from "react";

//components
import EditButton from "../atom/EditButton";
import EditPersonalInfo from "./EditPersonalInfo";

//styles
import styles from "./AccountInfo.module.css";

function PersonalInfo({ data }) {
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.accountInfoContainer}>
      {edit ? (
        <EditPersonalInfo setEdit={setEdit} prevData={data} />
      ) : (
        <>
          <div className={styles.title}>
            <h3>اطلاعات شخصی</h3>
            <button onClick={() => setEdit(true)}>
              <EditButton />
              <p>ویرایش اطلاعات</p>
            </button>
          </div>
          <div className={styles.info}>
            <div>
              <p>نام</p>
              {data?.data.firstName ? (
                <span>{data?.data.firstName}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>نام خانوادگی</p>
              {data?.data.lastName ? (
                <span>{data?.data.lastName}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>کدملی</p>
              {data?.data.nationalCode ? (
                <span>{data?.data.nationalCode}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>جنسیت</p>
              {data?.data.gender ? (
                <span>{data?.data.gender}</span>
              ) : (
                <span>-</span>
              )}
            </div>
            <div>
              <p>تاریخ تولد</p>
              {data?.data.birthDate ? (
                <span>
                  {new Date(data?.data.birthDate).toLocaleDateString("fa-IR")}
                </span>
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

export default PersonalInfo;
