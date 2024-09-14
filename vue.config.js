module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://0df9-223-72-83-211.ngrok-free.app',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}