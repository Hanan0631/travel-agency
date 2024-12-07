import Logo from "@/ui/atom/Logo";
import styles from "./Header.module.css";
import LoginButton from "@/ui/molecule/LoginButton";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Logo />
        <ul>
          <li>صفحه اصلی</li>
          <li>خدمات گردشگری</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <LoginButton />
    </div>
  );
}

export default Header;
