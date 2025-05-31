import Link from "next/link";
import styles from './header.module.css';

export  function Header() {
  return (
       <div className={styles.header}>
          <nav className={styles.nav}>
            <ul>
            <li>
            <div className={styles.Trangchu}>
            <Link href="/">Trang chủ</Link> 
            </div>
            </li>
            <div className={styles.gioithieu}>
              <Link href="/Gioithieu">Giới thiệu</Link>
              </div>
            <li>
              <div className={styles.lienhe}>
              <Link href="/lienhe">Liên hệ</Link>
              </div>
            </li>
            </ul>
          </nav>
          <div className={styles.logo}>
            <div className={styles.tentiem}>tiệm trà sữa </div>
          </div>
    </div>
  );
}
  