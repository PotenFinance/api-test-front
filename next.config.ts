import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://www.potenfinance.site:8080/:path*',
      },
    ];
  },
};

export default nextConfig;
