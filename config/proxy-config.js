var proxyConfig = {
  '/api': {
    target: 'http://localhost:8888',
    changeOrigin: true,
    pathRewrite: {
      '/api': '/'
    }
  }
};

module.exports = proxyConfig;
