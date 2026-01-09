import Image from 'next/image';
import { VehicleHighlight } from '@/types/vehicle';
import { IMAGE_DIMENSIONS } from '@/constants/config';
import styles from './VehicleHighlights.module.css';

interface VehicleHighlightsProps {
  highlights: VehicleHighlight[];
}

interface HighlightItemProps {
  highlight: VehicleHighlight;
  index: number;
}

function HighlightItem({ highlight, index }: HighlightItemProps) {
  const isImageRight = index % 2 === 0;

  return (
    <div
      className={`${styles.highlight} ${
        isImageRight ? styles.highlightImageRight : styles.highlightImageLeft
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
          width={IMAGE_DIMENSIONS.HIGHLIGHT.width}
          height={IMAGE_DIMENSIONS.HIGHLIGHT.height}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export function VehicleHighlights({ highlights }: VehicleHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <section className={styles.highlights}>
      {highlights.map((highlight, index) => (
        <HighlightItem key={index} highlight={highlight} index={index} />
      ))}
    </section>
  );
}
