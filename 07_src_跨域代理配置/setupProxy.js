const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware(
            '/api1',
            {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite(path) {
                    return path.replace('/api1', '');

                }
            }
        ),
        proxy.createProxyMiddleware(
            '/api2',
            {
                target: 'http://localhost:8001',
                changeOrigin: true,
                pathRewrite(path) {
                    return path.replace('/api2', '');

                }
            }
        )

    )
}