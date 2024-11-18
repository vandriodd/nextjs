/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com']
  },
  experimental: {
    ppr: 'incremental'
  }
}

module.exports = nextConfig
