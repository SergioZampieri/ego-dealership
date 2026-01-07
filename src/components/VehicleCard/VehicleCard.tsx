import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types/vehicle';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className={styles.vehicleCard}>
      <h2 className={styles.vehicleName}>{vehicle.name}</h2>
      <p className={styles.vehicleInfo}>
        {vehicle.year} | $ {vehicle.price.toLocaleString('es-AR')}
      </p>
      <div className={styles.vehicleImageContainer}>
        <Image
          src={vehicle.thumbnail}
          alt={`${vehicle.name} ${vehicle.year}`}
          width={300}
          height={200}
          className={styles.vehicleImage}
        />
      </div>
      <Link href={`/models/${vehicle.id}`} className={styles.viewVehicleButton}>
        Ver Modelo
      </Link>
    </div>
  );
}
