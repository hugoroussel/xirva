const path = require('path');

module.exports = {
  experimental: { granularChunks: true },
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  exportPathMap() {
    return {
      'out/': { page: '/' },
      'out/cs': { page: '/cs' },
    };
  },
};
