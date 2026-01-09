import Image from 'next/image';
import { VehicleDetails } from '@/types/vehicle';
import { IMAGE_DIMENSIONS } from '@/constants/config';
import styles from './VehicleHero.module.css';

interface VehicleHeroProps {
  vehicle: VehicleDetails;
}

export function VehicleHero({ vehicle }: VehicleHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src={vehicle.photo}
          alt={vehicle.name}
          width={IMAGE_DIMENSIONS.HERO.width}
          height={IMAGE_DIMENSIONS.HERO.height}
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.vehicleModel}>{vehicle.name}</p>
        <h1 className={styles.heroTitle}>{vehicle.title}</h1>
        <div
          className={styles.heroDescription}
          dangerouslySetInnerHTML={{ __html: vehicle.description }}
        />
      </div>
    </section>
  );
}
