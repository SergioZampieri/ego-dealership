'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          EGO
        </Link>

        <div className={styles.navTabs}>
          <Link
            href="/"
            className={`${styles.navTab} ${pathname === '/' ? styles.active : ''}`}
          >
            Modelos
          </Link>
          <Link
            href="/ficha-de-modelo"
            className={`${styles.navTab} ${pathname === '/ficha-de-modelo' ? styles.active : ''}`}
          >
            Ficha de modelo
          </Link>
        </div>

        <button
          className={styles.menuButton}
          aria-label="Menú"
        >
          <span className={styles.menuText}>Menú</span>
          <span className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  );
}
