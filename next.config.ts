import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment
  output: 'export',
  images: {
    // Required for static export - Next.js Image Optimization doesn't work without a server
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'challenge.egodesign.dev',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
