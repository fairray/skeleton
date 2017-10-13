const config = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': 'http://127.0.0.1:4000',
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
  },
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
};

module.exports = config;
