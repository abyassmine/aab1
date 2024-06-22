// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.releans.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // This will remove /api from the path
      },
    })
  );
};
