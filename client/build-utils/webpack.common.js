const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const DocumentTitle = 'Skeleton';

const commonPath = require('./commonPath');

module.exports = {
  entry: ['./client/index.js', './client/style/index.scss'],
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPath.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: '/',
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      fileName: 'index.html',
      title: DocumentTitle,
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: './client/favicon.png',
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true,
      },
    }),
    new WebpackCleanupPlugin(),
  ],
};
