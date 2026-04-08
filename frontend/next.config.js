/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  productionBrowserSourceMaps: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Ensure proper static export if needed
  reactStrictMode: true,

  // SWR with revalidation
  swcMinify: true,

  // Headers for better caching
  async headers() {
    return [
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
