"use client";

//next
import Link from "next/link";
import Image from "next/image";

//react
import { useEffect, useRef, useState } from "react";

//public
import logo from "@/public/images/logo.png";

//components
import SignInButton from "@/ui/atom/SignInButton";
import MenuButton from "@/ui/atom/MenuButton";
import Navbar from "@/ui/organism/Navbar";
import LoginButton from "@/ui/molecule/LoginButton";

//styles
import styles from "./Header.module.css";
import Authentication from "src/components/templates/Authentication";

function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const closeNavbar = (event) => {
      if (!ref.current?.contains(event.target)) {
        setNavbarIsOpen(false);
        setModalIsOpen(false);
      }
    };
    document.addEventListener("click", closeNavbar);

    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, [modalIsOpen]);

  return (
    <>
      <div className={styles.header}>
        {navbarIsOpen && <Navbar reference={ref} />}
        <div
          className={styles.mobileDesign}
          onClick={() => setNavbarIsOpen(true)}
        >
          <MenuButton />
        </div>
        <div
          className={styles.mobileDesign}
          onClick={() => setModalIsOpen(true)}
        >
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
        <div
          className={styles.desktopDesign}
          onClick={() => setModalIsOpen(true)}
        >
          <LoginButton />
        </div>
      </div>
      {modalIsOpen && (
        <Authentication
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          reference={ref}
        />
      )}
    </>
  );
}

export default Header;
