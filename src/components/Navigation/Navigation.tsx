'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_TEXT } from '@/constants/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const isDetailPage = pathname.startsWith('/models/');

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {NAVIGATION_TEXT.LOGO}
        </Link>

        <div className={styles.navTabs}>
          <Link
            href="/"
            className={`${styles.navTab} ${pathname === '/' ? styles.active : ''}`}
          >
            {NAVIGATION_TEXT.MODELS_TAB}
          </Link>
          {isDetailPage && (
            <span className={`${styles.navTab} ${styles.active}`}>
              {NAVIGATION_TEXT.DETAIL_TAB}
            </span>
          )}
        </div>

        <button
          className={styles.menuButton}
          aria-label={NAVIGATION_TEXT.MENU_ARIA_LABEL}
        >
          <span className={styles.menuText}>{NAVIGATION_TEXT.MENU_TEXT}</span>
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
