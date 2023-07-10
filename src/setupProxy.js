const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://backend-stackoverflow-x2hh.onrender.com',
      changeOrigin: true,
    })
  );
};

///45652153902-7u7s0jul996r28lrfinocr89sg37e31g.apps.googleusercontent.com
///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