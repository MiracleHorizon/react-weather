/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    appDir: true,
    serverActions: true
  }
}

module.exports = nextConfig
