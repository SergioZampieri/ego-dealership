import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types/vehicle';
import { IMAGE_DIMENSIONS } from '@/constants/config';
import { formatVehicleInfo } from '@/utils/formatters';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className={styles.vehicleCard}>
      <h2 className={styles.vehicleName}>{vehicle.name}</h2>
      <p className={styles.vehicleInfo}>
        {formatVehicleInfo(vehicle.year, vehicle.price)}
      </p>
      <div className={styles.vehicleImageContainer}>
        <Image
          src={vehicle.thumbnail}
          alt={`${vehicle.name} ${vehicle.year}`}
          width={IMAGE_DIMENSIONS.THUMBNAIL.width}
          height={IMAGE_DIMENSIONS.THUMBNAIL.height}
          className={styles.vehicleImage}
        />
      </div>
      <Link href={`/models/${vehicle.id}`} className={styles.viewVehicleButton}>
        Ver Modelo
      </Link>
    </div>
  );
}
