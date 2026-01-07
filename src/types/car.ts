// Base car model interface for list view
export interface CarModel {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

// Feature interface for model detail
export interface ModelFeature {
  name: string;
  description: string;
  image: string;
}

// Highlight interface for model detail
export interface ModelHighlight {
  title: string;
  content: string;
  image: string;
}

// Extended car detail interface
export interface CarDetail extends CarModel {
  title: string;
  description: string;
  model_features: ModelFeature[];
  model_highlights: ModelHighlight[];
}
