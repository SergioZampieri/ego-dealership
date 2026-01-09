import { Metadata } from 'next';
import { fetchVehicleById } from '@/services/api';
import { notFound } from 'next/navigation';
import VehicleDetailView from '@/components/VehicleDetailView/VehicleDetailView';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const vehicle = await fetchVehicleById(parseInt(id));
    return {
      title: `${vehicle.name} ${vehicle.year} | Toyota`,
      description: vehicle.description.replace(/<[^>]*>/g, ''),
      openGraph: {
        title: `${vehicle.name} ${vehicle.year} | Toyota`,
        description: vehicle.title,
        type: 'website',
        locale: 'es_AR',
      },
    };
  } catch {
    return {
      title: 'Vehículo no encontrado | Toyota',
    };
  }
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;

  let vehicle;
  try {
    vehicle = await fetchVehicleById(parseInt(id));
  } catch {
    notFound();
  }

  return (
    <div className={styles.container}>
      <VehicleDetailView vehicle={vehicle} />
    </div>
  );
}
