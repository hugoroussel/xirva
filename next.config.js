module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/out/cs': { page: '/cs' },
    };
  },
};
