import Image from 'next/image';
import { VehicleFeature } from '@/types/vehicle';
import { IMAGE_DIMENSIONS } from '@/constants/config';
import styles from './VehicleFeatures.module.css';

interface VehicleFeaturesProps {
  features: VehicleFeature[];
}

interface FeatureCardProps {
  feature: VehicleFeature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureImage}>
        <Image
          src={feature.image}
          alt={feature.name}
          width={IMAGE_DIMENSIONS.FEATURE.width}
          height={IMAGE_DIMENSIONS.FEATURE.height}
          className={styles.image}
        />
      </div>
      <h3 className={styles.featureTitle}>{feature.name}</h3>
      <p className={styles.featureDescription}>{feature.description}</p>
    </div>
  );
}

export function VehicleFeatures({ features }: VehicleFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}
