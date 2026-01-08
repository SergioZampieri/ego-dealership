import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vehículo no encontrado</h1>
        <p className={styles.description}>
          Lo sentimos, el vehículo que estás buscando no existe o ha sido eliminado.
        </p>
        <Link href="/" className={styles.backButton}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
