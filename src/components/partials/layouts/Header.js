"use client";

import SignInButton from "@/ui/atom/SignInButton";
import styles from "./Header.module.css";
import MenuButton from "@/ui/atom/MenuButton";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/ui/organism/Navbar";

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
      <div onClick={() => setIsOpen(true)}>
        <MenuButton />
      </div>
      <div>
        <SignInButton />
      </div>
    </div>
  );
}

export default Header;
