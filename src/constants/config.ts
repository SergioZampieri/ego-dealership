export const API_CONFIG = {
  BASE_URL: 'https://challenge.egodesign.dev/api',
  // Cache revalidation time in seconds (1 hour)
  CACHE_REVALIDATE_SECONDS: 3600,
} as const;

export const IMAGE_DIMENSIONS = {
  // Hero/detail page main image
  HERO: {
    width: 600,
    height: 400,
  },
  // Feature card images
  FEATURE: {
    width: 270,
    height: 180,
  },
  // Highlight section images
  HIGHLIGHT: {
    width: 560,
    height: 400,
  },
  // Vehicle card thumbnail
  THUMBNAIL: {
    width: 300,
    height: 200,
  },
} as const;
