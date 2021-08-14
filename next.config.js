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
      '/cs': { page: '/cs' },
      '/bio': { page: '/bio' },
      '/econ': { page: '/econ' },
      '/eess': { page: '/eess' },
      '/math': { page: '/math' },
      '/physics': { page: '/physics' },
      '/stat': { page: '/stat' },
      '/categories': { page: '/categories' },
      '/list': { page: '/list' },
      '/year': { page: '/year' },
    };
    return paths;
  },
};
