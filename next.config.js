/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV !== 'development'

const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: false,
  },
  basePath: isProd ? '/BeePoll' : '',
  assetPrefix: './',
  webpack: function (config, options) {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
}

module.exports = nextConfig