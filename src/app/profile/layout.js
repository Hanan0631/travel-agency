"use client"

import AuthProvider from "@/partials/provider/AuthProvider";
import MyProfile from "@/ui/atom/MyProfile";
import MyTours from "@/ui/atom/MyTours";
import Transactions from "@/ui/atom/Transactions";
import Link from "next/link";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

function ProfileLayout({ children }) {
    const pathname = usePathname()
  return (
    <AuthProvider>
      <div className={styles.layoutContainer}>
        <ul>
          <li className={pathname === "/profile" ? styles.active : ""}>
            <Link href="/profile" >
              <MyProfile color={pathname === "/profile" ? "#28a745" : "#282828"}/>
              پروفایل من
            </Link>
          </li>
          <div className={styles.border}></div>
          <li  className={pathname === "/profile/my-tours" ? styles.active : ""}>
            <Link href="/profile/my-tours">
              <MyTours color={pathname === "/profile/my-tours" ? "#28a745" : "#282828"} />
              تور های من
            </Link>
          </li>
          <div className={styles.border}></div>
          <li className={pathname === "/profile/transactions" ? styles.active : ""}>
            <Link href="/profile/transactions">
              <Transactions color={pathname === "/profile/transactions" ? "#28a745" : "#282828"}/>
              تراکنش ها
            </Link>
          </li>
        </ul>
        <main className={styles.main}>{children}</main>
      </div>
    </AuthProvider>
  );
}

export default ProfileLayout;
