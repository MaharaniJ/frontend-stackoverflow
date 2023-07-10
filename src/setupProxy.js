const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://backend-stackoverflow-x2hh.onrender.com/',
      changeOrigin: true,
    })
  );
};