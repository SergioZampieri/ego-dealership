import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2026 Toyota Argentina.</p>
        <p className={styles.text}>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
