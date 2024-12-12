"use client";

//next
import Link from "next/link";

//components
import ProfileIcon from "../atom/ProfileIcon";
import UserInformationIcon from "../atom/UserInformationIcon";
import LogoutIcon from "../atom/LogoutIcon";

//core
import { e2p } from "@/utils/replaceNumber";
import { setCookie } from "@/utils/cookie";

//styles
import styles from "./ProfileInformation.module.css";

function ProfileInformation({ mobile }) {
  const logoutHandler = () => {
    setCookie("accessToken", "");
    window.location.reload();
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.mobile}>
        <div>
          <ProfileIcon />
        </div>
        <span>{e2p(mobile)}</span>
      </div>
      <Link href="/profile">
        <div className={styles.information}>
          <UserInformationIcon />
          <span>اطلاعات حساب کاربری</span>
        </div>
      </Link>
      <div className={styles.logout} onClick={logoutHandler}>
        <LogoutIcon />
        <span>خروج از حساب کاربری</span>
      </div>
    </div>
  );
}

export default ProfileInformation;
