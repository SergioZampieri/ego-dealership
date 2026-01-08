import { Metadata } from 'next';
import Image from 'next/image';
import { fetchVehicleById } from '@/services/api';
import { notFound } from 'next/navigation';
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={vehicle.photo}
            alt={vehicle.name}
            width={600}
            height={400}
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

      {/* Features Section */}
      {vehicle.model_features && vehicle.model_features.length > 0 && (
        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {vehicle.model_features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    width={270}
                    height={180}
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.featureTitle}>{feature.name}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Highlights Section */}
      {vehicle.model_highlights && vehicle.model_highlights.length > 0 && (
        <section className={styles.highlights}>
          {vehicle.model_highlights.map((highlight, index) => (
            <div
              key={index}
              className={`${styles.highlight} ${
                index % 2 === 0 ? styles.highlightImageRight : styles.highlightImageLeft
              }`}
            >
              <div className={styles.highlightContent}>
                <h2 className={styles.highlightTitle}>{highlight.title}</h2>
                <div
                  className={styles.highlightText}
                  dangerouslySetInnerHTML={{ __html: highlight.content }}
                />
              </div>
              <div className={styles.highlightImage}>
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={560}
                  height={400}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
