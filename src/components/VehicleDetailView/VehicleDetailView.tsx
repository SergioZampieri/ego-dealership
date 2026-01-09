import { VehicleDetails } from '@/types/vehicle';
import { VehicleHero } from './VehicleHero';
import { VehicleFeatures } from './VehicleFeatures';
import { VehicleHighlights } from './VehicleHighlights';

interface VehicleDetailViewProps {
  vehicle: VehicleDetails;
}

export default function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  return (
    <>
      <VehicleHero vehicle={vehicle} />
      <VehicleFeatures features={vehicle.model_features} />
      <VehicleHighlights highlights={vehicle.model_highlights} />
    </>
  );
}
