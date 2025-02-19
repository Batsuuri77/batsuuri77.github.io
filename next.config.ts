import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Base path for the project
  assetPrefix: '/',
  trailingSlash: true, // Enable trailing slash
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
