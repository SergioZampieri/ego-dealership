export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const IMAGE_SIZES = `(max-width: ${BREAKPOINTS.mobile}px) 100vw, (max-width: ${BREAKPOINTS.tablet}px) 50vw, 33vw`;
