/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_DEMO_MODE: 'true',
    NEXT_PUBLIC_ANALYTICS: 'false',
  },
}

module.exports = nextConfig
