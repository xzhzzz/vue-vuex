var proxyConfig = {
  '/': {
    target: 'http://localhost:8888',
    changeOrigin: true,
    logLevel: 'debug'
  }
};

module.exports = proxyConfig;
