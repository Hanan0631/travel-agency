"use client";

//next
import Link from "next/link";
import Image from "next/image";

//react
import { useEffect, useRef, useState } from "react";

//public
import logo from "@/public/images/logo.png"

//components
import SignInButton from "@/ui/atom/SignInButton";
import MenuButton from "@/ui/atom/MenuButton";
import Navbar from "@/ui/organism/Navbar";
import LoginButton from "@/ui/molecule/LoginButton";

//styles
import styles from "./Header.module.css";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const closeNavbar = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeNavbar);

    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  });

  return (
    <div className={styles.header}>
      {isOpen && <Navbar reference={ref} />}
      <div className={styles.mobileDesign} onClick={() => setIsOpen(true)}>
        <MenuButton />
      </div>
      <div className={styles.mobileDesign}>
        <SignInButton />
      </div>
      <div className={styles.desktopDesign}>
        <Image src={logo} width={146} height={44} alt="Logo" />
        <ul>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/">خدمات گردشگری</Link>
          <Link href="/">درباره ما</Link>
          <Link href="/">تماس با ما</Link>
        </ul>
      </div>
      <Link className={styles.desktopDesign} href="/send-otp">
        <LoginButton />
      </Link>
    </div>
  );
}

export default Header;
