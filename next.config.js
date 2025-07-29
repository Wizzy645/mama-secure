/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.builder.io'],
  },
}

module.exports = nextConfig
