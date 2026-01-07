import type { Metadata } from 'next';
import { fetchVehicles } from '@/services/api';
import VehiclesView from '@/components/VehiclesView/VehiclesView';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Modelos Toyota | Autos, SUVs y Pickups',
  description: 'Descubrí nuestra línea completa de vehículos Toyota: Corolla, Hilux, Rav4 y más. Compará precios y características de todos nuestros modelos.',
  keywords: ['Toyota', 'autos', 'SUVs', 'pickups', 'Corolla', 'Hilux', 'Rav4', 'vehículos'],
  openGraph: {
    title: 'Modelos Toyota | Toda la línea de vehículos',
    description: 'Explorá la línea completa de vehículos Toyota. Encontrá el auto perfecto para vos.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default async function Home() {
  const vehicles = await fetchVehicles();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Descubrí todos los modelos</h1>
        <VehiclesView vehicles={vehicles} />
      </main>
    </div>
  );
}
