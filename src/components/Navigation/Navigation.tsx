'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_TEXT } from '@/constants/navigation';
import styles from './Navigation.module.css';

const MENU_SECTIONS = [
  {
    items: [
      { label: 'Modelos', href: '/' },
      { label: 'Servicios y Accesorios', href: '#' },
      { label: 'Financiación', href: '#' },
      { label: 'Reviews y Comunidad', href: '#' },
    ],
  },
  {
    items: [
      { label: 'Toyota Mobility Service', href: '#' },
      { label: 'Toyota Gazoo Racing', href: '#' },
      { label: 'Toyota Híbridos', href: '#' },
    ]
  },
  {
    items: [
      { label: 'Concesionarios', href: '#' },
      { label: 'Test Drive', href: '#' },
      { label: 'Contacto', href: '#' },
    ],
  },
  {
    items: [
      { label: 'Actividades', href: '#' },
      { label: 'Servicios al Cliente', href: '#' },
      { label: 'Ventas Especiales', href: '#' },
      { label: 'Innovación', href: '#' },
      { label: 'Prensa', href: '#' },
      { label: 'Acerca de...', href: '#' },
    ],
    highlight: true,
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const isDetailPage = pathname.startsWith('/models/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          onClick={toggleMenu}
        >
          <span className={styles.menuText}>{NAVIGATION_TEXT.MENU_TEXT}</span>
          <span className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div className={styles.menuOverlay} onClick={closeMenu} />
          <div className={styles.menuPanel}>
            <button className={styles.closeButton} onClick={closeMenu}>
              <span>Cerrar</span>
              <span className={styles.closeIcon}>✕</span>
            </button>
            <nav className={styles.menuNav}>
              {MENU_SECTIONS.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`${styles.menuSection} ${section.highlight ? styles.menuSectionHighlight : ''}`}
                >
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={styles.menuItem}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
