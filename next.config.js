const path = require('path');

module.exports = {
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
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
      '/cs': { page: '/out/cs' },
    };
    return paths;
  },
};
