import { fetchModels } from '@/services/api';
import Image from 'next/image';
import styles from './page.module.css';
import { IMAGE_SIZES } from '@/constants/breakpoints';

export default async function Home() {
  const models = await fetchModels();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Modelos Toyota</h1>
        <div className={styles.modelsList}>
          {models.map((model) => (
            <div key={model.id} className={styles.modelCard}>
              <h2 className={styles.modelName}>{model.name}</h2>
              <p className={styles.modelInfo}> {model.year} | ${model.price.toLocaleString('es-AR')}</p>
              <div className={styles.modelImageContainer}>
                <Image
                  src={model.photo}
                  alt={`${model.name} ${model.year}`}
                  width={300}
                  height={200}
                  className={styles.modelImage}
                  sizes={IMAGE_SIZES}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
