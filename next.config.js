/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Replace this:
    // domains: ['example.com', 'another-domain.com'],
    
    // With this:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      },
    ],
  },
}

module.exports = nextConfig